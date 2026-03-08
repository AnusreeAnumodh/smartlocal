import { Service } from '../models/service.model.js';

const seedServices = [
  {
    category: 'plumber',
    name: 'QuickFix Plumbing',
    phone: '+91-9000000001',
    city: 'Hyderabad',
    verified: true
  },
  {
    category: 'electrician',
    name: 'City Electric Works',
    phone: '+91-9000000002',
    city: 'Hyderabad',
    verified: true
  },
  {
    category: 'medical_store',
    name: 'LifeCare Pharmacy',
    phone: '+91-9000000003',
    city: 'Hyderabad',
    verified: true
  },
  {
    category: 'ambulance',
    name: 'Rapid Ambulance 24x7',
    phone: '+91-9000000004',
    city: 'Hyderabad',
    verified: true
  }
];

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
    const query = {};

    if (category) query.category = String(category).toLowerCase();
    if (city) query.city = new RegExp(`^${String(city)}$`, 'i');

    const data = await Service.find(query).sort({ verified: -1, createdAt: -1 });

    res.json({ count: data.length, data });
  } catch (error) {
    res.status(500).json({ message: 'Failed to fetch services', error: error.message });
  }
}
