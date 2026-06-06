import { Provider } from '../models/provider.model.js';
import { Review } from '../models/review.model.js';
import { ensureFallbackStore } from '../utils/fallback-store.js';

function ensureAuthStore(app) {
  return ensureFallbackStore(app);
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

async function recalculateProviderRating(providerIdentifier, provider) {
  const reviews = await Review.find({ providerId: providerIdentifier }).lean();
  const reviewCount = reviews.length;
  const averageRating = reviewCount
    ? Number((reviews.reduce((sum, review) => sum + review.rating, 0) / reviewCount).toFixed(1))
    : 4.2;

  provider.rating = averageRating;
  provider.reviewCount = reviewCount;
  await provider.save();

  return { averageRating, reviewCount };
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

export async function listProviderReviews(req, res) {
  const { providerId } = req.params;

  if (req.app.locals.dbConnected) {
    const reviews = await Review.find({ providerId }).sort({ createdAt: -1 }).lean();

    return res.json({
      count: reviews.length,
      data: reviews.map(sanitizeReview),
      source: 'database-session'
    });
  }

  const store = ensureAuthStore(req.app);
  const reviews = store.reviews
    .filter((review) => review.providerId === providerId)
    .sort((left, right) => new Date(right.createdAt).getTime() - new Date(left.createdAt).getTime())
    .map(sanitizeReview);

  return res.json({
    count: reviews.length,
    data: reviews,
    source: 'fallback-session'
  });
}

export async function createProviderReview(req, res) {
  const { providerId } = req.params;
  const { userId, userName, rating, comment = '' } = req.body || {};
  const normalizedRating = Number(rating);

  if (!providerId || !userId || !userName || Number.isNaN(normalizedRating) || normalizedRating < 1 || normalizedRating > 5) {
    return res.status(400).json({ message: 'providerId, userId, userName, and rating between 1 and 5 are required' });
  }

  if (req.app.locals.dbConnected) {
    const provider = await Provider.findById(providerId);

    if (!provider) {
      return res.status(404).json({ message: 'Provider not found' });
    }

    const review = await Review.create({
      providerId,
      userId,
      userName,
      rating: normalizedRating,
      comment
    });

    const { averageRating, reviewCount } = await recalculateProviderRating(providerId, provider);

    return res.status(201).json({
      message: 'Review submitted successfully',
      data: {
        review: sanitizeReview(review),
        provider: {
          ...sanitizeProvider(provider),
          rating: averageRating,
          reviewCount
        }
      },
      source: 'database-session'
    });
  }

  const store = ensureAuthStore(req.app);
  const provider = store.providers.find((entry) => entry.id === providerId);

  if (!provider) {
    return res.status(404).json({ message: 'Provider not found' });
  }

  const review = {
    id: `review-${Date.now()}`,
    providerId,
    userId,
    userName,
    rating: normalizedRating,
    comment,
    createdAt: new Date().toISOString()
  };

  store.reviews.unshift(review);

  const providerReviews = store.reviews.filter((entry) => entry.providerId === providerId);
  provider.reviewCount = providerReviews.length;
  provider.rating = Number((providerReviews.reduce((sum, entry) => sum + entry.rating, 0) / provider.reviewCount).toFixed(1));

  return res.status(201).json({
    message: 'Review submitted successfully',
    data: {
      review: sanitizeReview(review),
      provider: sanitizeProvider(provider)
    },
    source: 'fallback-session'
  });
}
