import { Service } from '../models/service.model.js';

const seedServices = [
  {
    category: 'plumber',
    name: 'Ravi Plumbing Services',
    phone: '+91-9000000001',
    city: 'Kochi',
    verified: true,
    rating: 4.8,
    responseTimeMinutes: 5,
    availability: 'available',
    highResponseRate: true
  },
  {
    category: 'electrician',
    name: 'Trivandrum Power Care',
    phone: '+91-9000000002',
    city: 'Thiruvananthapuram',
    verified: true,
    rating: 4.7,
    responseTimeMinutes: 9,
    availability: 'busy',
    highResponseRate: true
  },
  {
    category: 'medical_store',
    name: 'Calicut LifeCare Pharmacy',
    phone: '+91-9000000003',
    city: 'Kozhikode',
    verified: true,
    rating: 4.6,
    responseTimeMinutes: 6,
    availability: 'available',
    highResponseRate: true
  },
  {
    category: 'ambulance',
    name: 'Thrissur Rapid Ambulance 24x7',
    phone: '+91-9000000004',
    city: 'Thrissur',
    verified: true,
    rating: 4.9,
    responseTimeMinutes: 4,
    availability: 'available',
    highResponseRate: true
  },
  {
    category: 'plumber',
    name: 'Alappuzha Pipe Rescue',
    phone: '+91-9000000005',
    city: 'Alappuzha',
    verified: true,
    rating: 4.5,
    responseTimeMinutes: 11,
    availability: 'available',
    highResponseRate: false
  },
  {
    category: 'electrician',
    name: 'Kannur HomeSafe Electricals',
    phone: '+91-9000000006',
    city: 'Kannur',
    verified: false,
    rating: 4.1,
    responseTimeMinutes: 16,
    availability: 'available',
    highResponseRate: false
  },
  {
    category: 'medical_store',
    name: 'Kottayam Health Hub',
    phone: '+91-9000000007',
    city: 'Kottayam',
    verified: true,
    rating: 4.4,
    responseTimeMinutes: 8,
    availability: 'available',
    highResponseRate: true
  },
  {
    category: 'ambulance',
    name: 'Kollam Emergency Link',
    phone: '+91-9000000008',
    city: 'Kollam',
    verified: true,
    rating: 4.7,
    responseTimeMinutes: 7,
    availability: 'available',
    highResponseRate: true
  }
];

function normalizeFilters(query) {
  const normalizedCategory = query.category ? String(query.category).toLowerCase() : null;
  const normalizedCity = query.city ? String(query.city).toLowerCase() : null;

  return { normalizedCategory, normalizedCity };
}

function filterServices(data, normalizedCategory, normalizedCity) {
  return data.filter((service) => {
    const categoryMatch = normalizedCategory ? service.category === normalizedCategory : true;
    const cityMatch = normalizedCity ? service.city.toLowerCase() === normalizedCity : true;
    return categoryMatch && cityMatch;
  });
}

function getRegisteredProviderServices(app) {
  const providers = app.locals.authStore?.providers ?? [];

  return providers.map((provider) => ({
    _id: provider.id,
    category: provider.category,
    name: provider.businessName,
    phone: provider.mobile,
    city: provider.city,
    verified: provider.verified,
    rating: provider.rating,
    responseTimeMinutes: provider.responseTimeMinutes,
    availability: provider.availability,
    highResponseRate: provider.highResponseRate
  }));
}

function scoreService(service) {
  const ratingScore = (service.rating || 0) * 20;
  const responseScore = Math.max(0, 30 - (service.responseTimeMinutes || 30));
  const verifiedScore = service.verified ? 14 : 4;
  const availabilityScore = service.availability === 'available' ? 12 : 3;
  const responseRateScore = service.highResponseRate ? 8 : 0;

  return ratingScore + responseScore + verifiedScore + availabilityScore + responseRateScore;
}

export async function bootstrapServices() {
  const count = await Service.countDocuments();
  if (count === 0) {
    await Service.insertMany(seedServices);
    console.log('Seeded default services');
  }
}

export async function listServices(req, res) {
  try {
    const { category, city } = req.query;
    const { normalizedCategory, normalizedCity } = normalizeFilters(req.query);
    const isDbConnected = Boolean(req.app.locals.dbConnected);
    let data = [];
    const registeredProviderServices = getRegisteredProviderServices(req.app);

    if (isDbConnected) {
      const query = {};
      if (normalizedCategory) query.category = normalizedCategory;
      if (normalizedCity) query.city = new RegExp(`^${String(city)}$`, 'i');
      const dbData = await Service.find(query).sort({ verified: -1, createdAt: -1 });
      data = [
        ...dbData.map((entry) => entry.toObject()),
        ...filterServices(registeredProviderServices, normalizedCategory, normalizedCity)
      ];
    } else {
      data = [
        ...filterServices(seedServices, normalizedCategory, normalizedCity),
        ...filterServices(registeredProviderServices, normalizedCategory, normalizedCity)
      ];
    }

    res.json({
      count: data.length,
      data,
      source: isDbConnected ? 'database' : 'fallback'
    });
  } catch (error) {
    res.status(500).json({ message: 'Failed to fetch services', error: error.message });
  }
}

export async function recommendService(req, res) {
  try {
    const { normalizedCategory, normalizedCity } = normalizeFilters(req.query);
    const isDbConnected = Boolean(req.app.locals.dbConnected);
    const registeredProviderServices = getRegisteredProviderServices(req.app);
    let services = [];

    if (isDbConnected) {
      const query = {};
      if (normalizedCategory) query.category = normalizedCategory;
      if (normalizedCity) query.city = new RegExp(`^${String(req.query.city)}$`, 'i');
      const dbServices = await Service.find(query).sort({ verified: -1, createdAt: -1 });
      services = [
        ...dbServices.map((entry) => entry.toObject()),
        ...filterServices(registeredProviderServices, normalizedCategory, normalizedCity)
      ];
    } else {
      services = [
        ...filterServices(seedServices, normalizedCategory, normalizedCity),
        ...filterServices(registeredProviderServices, normalizedCategory, normalizedCity)
      ];
    }

    if (services.length === 0) {
      return res.status(404).json({ message: 'No service providers available for recommendation' });
    }

    const ranked = [...services]
      .map((service) => ({
        ...service.toObject?.(),
        ...service,
        recommendationScore: scoreService(service)
      }))
      .sort((a, b) => b.recommendationScore - a.recommendationScore);

    const topChoice = ranked[0];

    return res.json({
      data: {
        provider: topChoice,
        reason: `Recommended: ${topChoice.name} - ${topChoice.rating} star - ${topChoice.responseTimeMinutes} mins away - ${topChoice.highResponseRate ? 'High response rate' : 'Reliable availability'}`,
        scoreBreakdown: {
          rating: topChoice.rating,
          responseTimeMinutes: topChoice.responseTimeMinutes,
          availability: topChoice.availability,
          verified: topChoice.verified,
          highResponseRate: topChoice.highResponseRate
        }
      },
      source: isDbConnected ? 'database' : 'fallback-ai'
    });
  } catch (error) {
    return res.status(500).json({ message: 'Failed to generate recommendation', error: error.message });
  }
}
