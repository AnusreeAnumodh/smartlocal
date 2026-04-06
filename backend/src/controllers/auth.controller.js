function ensureAuthStore(app) {
  if (!app.locals.authStore) {
    app.locals.authStore = {
      users: [
        {
          id: 'user-demo-admin',
          fullName: 'Aarav Admin',
          mobile: '+91-9000000100',
          email: 'admin@smartlocal.app',
          password: 'admin123',
          role: 'admin',
          accountType: 'individual',
          createdAt: new Date().toISOString()
        },
        {
          id: 'user-demo-public',
          fullName: 'Anjali Joseph',
          mobile: '+91-9000000200',
          email: 'anjali@smartlocal.app',
          password: 'user123',
          role: 'user',
          accountType: 'community',
          communityName: 'Kochi Residents Forum',
          locality: 'Kochi',
          createdAt: new Date().toISOString()
        },
        {
          id: 'user-demo-provider',
          fullName: 'Ravi Kumar',
          mobile: '+91-9000000001',
          email: 'ravi@smartlocal.app',
          password: 'provider123',
          role: 'provider',
          accountType: 'individual',
          createdAt: new Date().toISOString()
        }
      ],
      providers: [
        {
          id: 'provider-demo-1',
          userId: 'user-demo-provider',
          businessName: 'Ravi Plumbing Services',
          ownerName: 'Ravi Kumar',
          mobile: '+91-9000000001',
          email: 'ravi@smartlocal.app',
          category: 'plumber',
          city: 'Kochi',
          address: 'Marine Drive, Kochi',
          availability: 'available',
          experienceYears: 7,
          verified: true,
          rating: 4.8,
          responseTimeMinutes: 5,
          highResponseRate: true,
          createdAt: new Date().toISOString()
        }
      ]
    };
  }

  return app.locals.authStore;
}

function sanitizeUser(user) {
  return {
    id: user.id,
    fullName: user.fullName,
    mobile: user.mobile,
    email: user.email,
    role: user.role,
    accountType: user.accountType ?? 'individual',
    communityName: user.communityName ?? '',
    locality: user.locality ?? '',
    createdAt: user.createdAt
  };
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

export function login(req, res) {
  const { mobile, password } = req.body || {};

  if (!mobile || !password) {
    return res.status(400).json({ message: 'mobile and password are required' });
  }

  const store = ensureAuthStore(req.app);
  const user = store.users.find((entry) => entry.mobile === mobile && entry.password === password);

  if (!user) {
    return res.status(401).json({ message: 'Invalid mobile number or password' });
  }

  const providerProfile = user.role === 'provider' ? store.providers.find((entry) => entry.userId === user.id) ?? null : null;

  return res.json({
    message: 'Login successful',
    data: {
      token: `smartlocal-${user.role}-${user.id}`,
      user: sanitizeUser(user),
      providerProfile: providerProfile ? sanitizeProvider(providerProfile) : null
    },
    source: req.app.locals.dbConnected ? 'database-session' : 'fallback-session'
  });
}

export function registerAccount(req, res) {
  if (req.body?.role === 'provider') {
    return registerProvider(req, res);
  }

  return registerUser(req, res);
}

export function registerProvider(req, res) {
  const {
    fullName,
    mobile,
    email,
    password,
    businessName,
    category,
    city,
    address,
    experienceYears
  } = req.body || {};

  if (!fullName || !mobile || !password || !businessName || !category || !city) {
    return res.status(400).json({
      message: 'fullName, mobile, password, businessName, category, and city are required'
    });
  }

  const store = ensureAuthStore(req.app);

  if (store.users.some((entry) => entry.mobile === mobile)) {
    return res.status(409).json({ message: 'A provider with this mobile number is already registered' });
  }

  const userId = `user-${Date.now()}`;
  const providerId = `provider-${Date.now()}`;
  const createdAt = new Date().toISOString();

  const user = {
    id: userId,
    fullName,
    mobile,
    email: email || '',
    password,
    role: 'provider',
    accountType: 'individual',
    createdAt
  };

  const provider = {
    id: providerId,
    userId,
    businessName,
    ownerName: fullName,
    mobile,
    email: email || '',
    category: String(category).toLowerCase(),
    city,
    address: address || '',
    availability: 'available',
    experienceYears: Number(experienceYears) || 1,
    verified: false,
    rating: 4.2,
    responseTimeMinutes: 15,
    highResponseRate: false,
    createdAt
  };

  store.users.push(user);
  store.providers.push(provider);

  return res.status(201).json({
    message: 'Provider registered successfully',
    data: {
      token: `smartlocal-provider-${user.id}`,
      user: sanitizeUser(user),
      providerProfile: sanitizeProvider(provider)
    },
    source: req.app.locals.dbConnected ? 'database-session' : 'fallback-session'
  });
}

export function registerUser(req, res) {
  const { fullName, mobile, email, password, city, accountType = 'individual', communityName = '', locality = '' } = req.body || {};

  if (!fullName || !mobile || !password || !city) {
    return res.status(400).json({
      message: 'fullName, mobile, password, and city are required'
    });
  }

  const store = ensureAuthStore(req.app);

  if (store.users.some((entry) => entry.mobile === mobile)) {
    return res.status(409).json({ message: 'A user with this mobile number is already registered' });
  }

  const createdAt = new Date().toISOString();
  const user = {
    id: `user-${Date.now()}`,
    fullName,
    mobile,
    email: email || '',
    password,
    role: 'user',
    accountType,
    communityName: accountType === 'community' ? communityName || fullName : '',
    locality: locality || city,
    createdAt
  };

  store.users.push(user);

  return res.status(201).json({
    message: 'User registered successfully',
    data: {
      token: `smartlocal-user-${user.id}`,
      user: sanitizeUser(user),
      providerProfile: null
    },
    source: req.app.locals.dbConnected ? 'database-session' : 'fallback-session'
  });
}

export function resetPassword(req, res) {
  const { mobile, newPassword } = req.body || {};

  if (!mobile || !newPassword) {
    return res.status(400).json({ message: 'mobile and newPassword are required' });
  }

  const store = ensureAuthStore(req.app);
  const user = store.users.find((entry) => entry.mobile === mobile);

  if (!user) {
    return res.status(404).json({ message: 'No account found for this mobile number' });
  }

  user.password = newPassword;

  return res.json({
    message: 'Password reset successful. You can login with the new password now.'
  });
}
