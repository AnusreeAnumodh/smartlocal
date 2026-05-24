import { Provider } from '../models/provider.model.js';

function ensureAuthStore(app) {
  if (!app.locals.authStore) {
    app.locals.authStore = {
      users: [],
      providers: []
    };
  }

  return app.locals.authStore;
}

function sanitizeProvider(provider) {
  return {
    id: String(provider._id || provider.id),
    userId: String(provider.userId),
    businessName: provider.businessName,
    ownerName: provider.ownerName,
    mobile: provider.mobile,
    email: provider.email,
    category: provider.category,
    city: provider.city,
    address: provider.address,
    availability: provider.availability,
    experienceYears: provider.experienceYears,
    verified: provider.verified,
    rating: provider.rating,
    responseTimeMinutes: provider.responseTimeMinutes,
    highResponseRate: provider.highResponseRate,
    createdAt: provider.createdAt
  };
}

export async function listProviders(req, res) {
  const { category, city } = req.query;
  const normalizedCategory = category ? String(category).toLowerCase() : '';
  const normalizedCity = city ? String(city).toLowerCase() : '';

  if (req.app.locals.dbConnected) {
    const query = {};
    if (normalizedCategory) query.category = normalizedCategory;
    if (normalizedCity) query.city = new RegExp(`^${String(city)}$`, 'i');

    const data = (await Provider.find(query).sort({ verified: -1, createdAt: -1 }).lean()).map(sanitizeProvider);

    return res.json({
      count: data.length,
      data,
      source: 'database-session'
    });
  }

  const store = ensureAuthStore(req.app);

  const data = store.providers
    .filter((provider) => {
      const categoryMatch = normalizedCategory ? provider.category === normalizedCategory : true;
      const cityMatch = normalizedCity ? provider.city.toLowerCase() === normalizedCity : true;
      return categoryMatch && cityMatch;
    })
    .map(sanitizeProvider)
    .sort((left, right) => Number(right.verified) - Number(left.verified));

  return res.json({
    count: data.length,
    data,
    source: 'fallback-session'
  });
}
