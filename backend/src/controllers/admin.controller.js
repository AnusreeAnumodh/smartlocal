import { User } from '../models/user.model.js';
import { Provider } from '../models/provider.model.js';
import { Review } from '../models/review.model.js';
import { SosAlert } from '../models/sos-alert.model.js';
import { Service } from '../models/service.model.js';
import { ensureFallbackStore } from '../utils/fallback-store.js';

function sanitizeUser(user) {
  return {
    id: String(user._id || user.id),
    fullName: user.fullName,
    mobile: user.mobile,
    email: user.email,
    role: user.role,
    approvalStatus: user.approvalStatus ?? 'approved',
    isActive: user.isActive ?? true,
    accountType: user.accountType ?? 'individual',
    communityName: user.communityName ?? '',
    locality: user.locality ?? '',
    createdAt: user.createdAt
  };
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
    reviewCount: provider.reviewCount ?? 0,
    responseTimeMinutes: provider.responseTimeMinutes,
    highResponseRate: provider.highResponseRate,
    createdAt: provider.createdAt
  };
}

function sanitizeReview(review) {
  return {
    id: String(review._id || review.id),
    providerId: String(review.providerId),
    userId: String(review.userId),
    userName: review.userName,
    rating: review.rating,
    comment: review.comment ?? '',
    createdAt: review.createdAt
  };
}

function sanitizeAlert(alert) {
  return {
    id: String(alert._id || alert.id),
    userId: alert.userId ?? '',
    userName: alert.userName,
    phone: alert.phone,
    city: alert.city ?? '',
    emergencyType: alert.emergencyType ?? 'general',
    description: alert.description ?? '',
    priority: alert.priority ?? 'medium',
    status: alert.status,
    recommendedActions: alert.recommendedActions ?? [],
    assignedProviderCategory: alert.assignedProviderCategory ?? '',
    location: { latitude: alert.latitude, longitude: alert.longitude },
    createdAt: alert.createdAt
  };
}

async function syncProviderStatus(providerId, verified) {
  const provider = await Provider.findById(providerId);

  if (!provider) {
    return null;
  }

  provider.verified = verified;
  await provider.save();

  await Service.updateMany(
    { phone: provider.mobile, name: provider.businessName },
    { $set: { verified } }
  );

  return provider;
}

export async function getAdminOverview(req, res) {
  if (req.app.locals.dbConnected) {
    const [users, providers, reviews, alerts] = await Promise.all([
      User.find().sort({ createdAt: -1 }).lean(),
      Provider.find().sort({ createdAt: -1 }).lean(),
      Review.find().sort({ createdAt: -1 }).limit(8).lean(),
      SosAlert.find().sort({ createdAt: -1 }).limit(8).lean()
    ]);

    return res.json({
      data: {
        metrics: {
          userCount: users.length,
          activeUserCount: users.filter((user) => user.isActive !== false && user.approvalStatus !== 'suspended').length,
          pendingUserCount: users.filter((user) => user.approvalStatus === 'pending').length,
          providerCount: providers.length,
          verifiedProviderCount: providers.filter((provider) => provider.verified).length,
          pendingProviderCount: providers.filter((provider) => !provider.verified).length,
          reviewCount: await Review.countDocuments(),
          openSosCount: await SosAlert.countDocuments({ status: { $in: ['queued', 'dispatching'] } })
        },
        users: users.map(sanitizeUser),
        providers: providers.map(sanitizeProvider),
        reviews: reviews.map(sanitizeReview),
        alerts: alerts.map(sanitizeAlert)
      },
      source: 'database-session'
    });
  }

  const store = ensureFallbackStore(req.app);
  const users = store.users.map(sanitizeUser);
  const providers = store.providers.map(sanitizeProvider);
  const reviews = [...store.reviews].sort((left, right) => new Date(right.createdAt).getTime() - new Date(left.createdAt).getTime()).slice(0, 8).map(sanitizeReview);
  const alerts = [...store.sosAlerts].sort((left, right) => new Date(right.createdAt).getTime() - new Date(left.createdAt).getTime()).slice(0, 8).map(sanitizeAlert);

  return res.json({
    data: {
      metrics: {
        userCount: users.length,
        activeUserCount: users.filter((user) => user.isActive !== false && user.approvalStatus !== 'suspended').length,
        pendingUserCount: users.filter((user) => user.approvalStatus === 'pending').length,
        providerCount: providers.length,
        verifiedProviderCount: providers.filter((provider) => provider.verified).length,
        pendingProviderCount: providers.filter((provider) => !provider.verified).length,
        reviewCount: store.reviews.length,
        openSosCount: store.sosAlerts.filter((alert) => ['queued', 'dispatching'].includes(alert.status)).length
      },
      users,
      providers,
      reviews,
      alerts
    },
    source: 'fallback-session'
  });
}

export async function updateProviderVerification(req, res) {
  const { providerId } = req.params;
  const { verified } = req.body || {};

  if (typeof verified !== 'boolean') {
    return res.status(400).json({ message: 'verified must be a boolean' });
  }

  if (req.app.locals.dbConnected) {
    const provider = await syncProviderStatus(providerId, verified);

    if (!provider) {
      return res.status(404).json({ message: 'Provider not found' });
    }

    return res.json({
      message: `Provider ${verified ? 'verified' : 'moved to pending'} successfully`,
      data: sanitizeProvider(provider)
    });
  }

  const store = ensureFallbackStore(req.app);
  const provider = store.providers.find((entry) => entry.id === providerId);

  if (!provider) {
    return res.status(404).json({ message: 'Provider not found' });
  }

  provider.verified = verified;

  return res.json({
    message: `Provider ${verified ? 'verified' : 'moved to pending'} successfully`,
    data: sanitizeProvider(provider)
  });
}

export async function updateUserApprovalStatus(req, res) {
  const { userId } = req.params;
  const { approvalStatus } = req.body || {};
  const allowedStatuses = new Set(['approved', 'pending', 'suspended']);

  if (!allowedStatuses.has(approvalStatus)) {
    return res.status(400).json({ message: 'approvalStatus must be approved, pending, or suspended' });
  }

  if (req.app.locals.dbConnected) {
    const user = await User.findById(userId);

    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }

    user.approvalStatus = approvalStatus;
    user.isActive = approvalStatus !== 'suspended';
    await user.save();

    return res.json({
      message: 'User status updated successfully',
      data: sanitizeUser(user)
    });
  }

  const store = ensureFallbackStore(req.app);
  const user = store.users.find((entry) => entry.id === userId);

  if (!user) {
    return res.status(404).json({ message: 'User not found' });
  }

  user.approvalStatus = approvalStatus;
  user.isActive = approvalStatus !== 'suspended';

  return res.json({
    message: 'User status updated successfully',
    data: sanitizeUser(user)
  });
}

export async function updateUserRole(req, res) {
  const { userId } = req.params;
  const { role } = req.body || {};
  const allowedRoles = new Set(['user', 'provider', 'admin', 'super_admin']);

  if (!allowedRoles.has(role)) {
    return res.status(400).json({ message: 'role must be user, provider, admin, or super_admin' });
  }

  if (req.app.locals.dbConnected) {
    const user = await User.findById(userId);

    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }

    user.role = role;
    await user.save();

    return res.json({
      message: 'User role updated successfully',
      data: sanitizeUser(user)
    });
  }

  const store = ensureFallbackStore(req.app);
  const user = store.users.find((entry) => entry.id === userId);

  if (!user) {
    return res.status(404).json({ message: 'User not found' });
  }

  user.role = role;

  return res.json({
    message: 'User role updated successfully',
    data: sanitizeUser(user)
  });
}

export async function updateSosStatus(req, res) {
  const { alertId } = req.params;
  const { status } = req.body || {};
  const allowedStatuses = new Set(['queued', 'dispatching', 'resolved']);

  if (!allowedStatuses.has(status)) {
    return res.status(400).json({ message: 'status must be queued, dispatching, or resolved' });
  }

  if (req.app.locals.dbConnected) {
    const alert = await SosAlert.findById(alertId);

    if (!alert) {
      return res.status(404).json({ message: 'SOS alert not found' });
    }

    alert.status = status;
    await alert.save();

    return res.json({
      message: 'SOS alert updated successfully',
      data: sanitizeAlert(alert)
    });
  }

  const store = ensureFallbackStore(req.app);
  const alert = store.sosAlerts.find((entry) => entry.id === alertId);

  if (!alert) {
    return res.status(404).json({ message: 'SOS alert not found' });
  }

  alert.status = status;

  return res.json({
    message: 'SOS alert updated successfully',
    data: sanitizeAlert(alert)
  });
}
