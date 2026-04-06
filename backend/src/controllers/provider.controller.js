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
    id: provider.id,
    userId: provider.userId,
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

export function listProviders(req, res) {
  const store = ensureAuthStore(req.app);
  const { category, city } = req.query;
  const normalizedCategory = category ? String(category).toLowerCase() : '';
  const normalizedCity = city ? String(city).toLowerCase() : '';

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
    source: req.app.locals.dbConnected ? 'database-session' : 'fallback-session'
  });
}
