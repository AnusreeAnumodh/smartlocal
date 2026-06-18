import { Booking } from '../models/booking.model.js';
import { Provider } from '../models/provider.model.js';
import { ensureFallbackStore } from '../utils/fallback-store.js';

function sanitizeBooking(booking) {
  return {
    id: String(booking._id || booking.id),
    userId: String(booking.userId),
    providerId: String(booking.providerId),
    serviceCategory: booking.serviceCategory,
    scheduledDate: booking.scheduledDate,
    scheduledTime: booking.scheduledTime,
    status: booking.status,
    rejectionReason: booking.rejectionReason || '',
    notes: booking.notes || '',
    userName: booking.userName || '',
    userPhone: booking.userPhone || '',
    userEmail: booking.userEmail || '',
    businessName: booking.businessName || '',
    providerPhone: booking.providerPhone || '',
    feedbackGiven: Boolean(booking.feedbackGiven),
    createdAt: booking.createdAt
  };
}

function findFallbackBooking(store, bookingId) {
  return store.bookings?.find((b) => b.id === bookingId);
}

export async function createBooking(req, res) {
  const {
    providerId,
    serviceCategory,
    scheduledDate,
    scheduledTime,
    notes,
    userName,
    userPhone,
    userEmail,
    userId
  } = req.body || {};

  if (!providerId || !serviceCategory || !scheduledDate || !scheduledTime || !userId) {
    return res.status(400).json({
      message: 'providerId, serviceCategory, scheduledDate, scheduledTime, and userId are required'
    });
  }

  if (req.app.locals.dbConnected) {
    let businessName = '';
    let providerPhone = '';
    try {
      const provider = await Provider.findById(providerId).lean();
      if (provider) {
        businessName = provider.businessName || '';
        providerPhone = provider.mobile || '';
      }
    } catch {
    }

    const booking = await Booking.create({
      userId,
      providerId,
      serviceCategory,
      scheduledDate,
      scheduledTime,
      notes: notes || '',
      userName: userName || '',
      userPhone: userPhone || '',
      userEmail: userEmail || '',
      businessName: businessName || '',
      providerPhone: providerPhone || '',
      status: 'pending'
    });

    return res.status(201).json({
      message: 'Booking request sent successfully',
      data: sanitizeBooking(booking),
      source: 'database-session'
    });
  }

  const store = ensureFallbackStore(req.app);
  if (!store.bookings) store.bookings = [];

  const provider = store.providers.find((p) => p.id === providerId);

  const booking = {
    id: `booking-${Date.now()}`,
    userId,
    providerId,
    serviceCategory,
    scheduledDate,
    scheduledTime,
    status: 'pending',
    rejectionReason: '',
    notes: notes || '',
    userName: userName || '',
    userPhone: userPhone || '',
    userEmail: userEmail || '',
    businessName: provider.businessName || '',
    providerPhone: provider.mobile || '',
    feedbackGiven: false,
    createdAt: new Date().toISOString()
  };

  store.bookings.unshift(booking);

  return res.status(201).json({
    message: 'Booking request sent successfully',
    data: sanitizeBooking(booking),
    source: 'fallback-session'
  });
}

export async function getBookingById(req, res) {
  const { bookingId } = req.params;

  if (!bookingId) {
    return res.status(400).json({ message: 'bookingId is required' });
  }

  if (req.app.locals.dbConnected) {
    const booking = await Booking.findById(bookingId).lean();
    if (!booking) {
      return res.status(404).json({ message: 'Booking not found' });
    }
    return res.json({ data: sanitizeBooking(booking), source: 'database-session' });
  }

  const store = ensureFallbackStore(req.app);
  const booking = findFallbackBooking(store, bookingId);
  if (!booking) {
    return res.status(404).json({ message: 'Booking not found' });
  }
  return res.json({ data: sanitizeBooking(booking), source: 'fallback-session' });
}

export async function markFeedbackGiven(req, res) {
  const { bookingId } = req.params;

  if (!bookingId) {
    return res.status(400).json({ message: 'bookingId is required' });
  }

  if (req.app.locals.dbConnected) {
    const booking = await Booking.findById(bookingId);
    if (!booking) {
      return res.status(404).json({ message: 'Booking not found' });
    }
    booking.feedbackGiven = true;
    await booking.save();
    return res.json({ message: 'Feedback marked as given', data: sanitizeBooking(booking), source: 'database-session' });
  }

  const store = ensureFallbackStore(req.app);
  const booking = findFallbackBooking(store, bookingId);
  if (!booking) {
    return res.status(404).json({ message: 'Booking not found' });
  }
  booking.feedbackGiven = true;
  return res.json({ message: 'Feedback marked as given', data: sanitizeBooking(booking), source: 'fallback-session' });
}

export async function getUserBookings(req, res) {
  const { userId } = req.query;

  if (!userId) {
    return res.status(400).json({ message: 'userId is required' });
  }

  if (req.app.locals.dbConnected) {
    const data = await Booking.find({ userId }).sort({ createdAt: -1 }).lean();
    return res.json({
      count: data.length,
      data: data.map(sanitizeBooking),
      source: 'database-session'
    });
  }

  const store = ensureFallbackStore(req.app);
  const bookings = (store.bookings || [])
    .filter((b) => b.userId === userId)
    .sort((a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime());

  return res.json({
    count: bookings.length,
    data: bookings.map(sanitizeBooking),
    source: 'fallback-session'
  });
}

export async function getProviderBookings(req, res) {
  const { providerId } = req.query;

  if (!providerId) {
    return res.status(400).json({ message: 'providerId is required' });
  }

  if (req.app.locals.dbConnected) {
    const data = await Booking.find({ providerId }).sort({ createdAt: -1 }).lean();
    return res.json({
      count: data.length,
      data: data.map(sanitizeBooking),
      source: 'database-session'
    });
  }

  const store = ensureFallbackStore(req.app);
  const bookings = (store.bookings || [])
    .filter((b) => b.providerId === providerId)
    .sort((a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime());

  return res.json({
    count: bookings.length,
    data: bookings.map(sanitizeBooking),
    source: 'fallback-session'
  });
}

export async function updateBookingStatus(req, res) {
  const { bookingId } = req.params;
  const { status, rejectionReason } = req.body || {};

  if (!bookingId || !status) {
    return res.status(400).json({ message: 'bookingId and status are required' });
  }

  if (!['accepted', 'rejected', 'completed'].includes(status)) {
    return res.status(400).json({ message: 'Status must be accepted, rejected, or completed' });
  }

  if (status === 'rejected' && !rejectionReason?.trim()) {
    return res.status(400).json({ message: 'Rejection reason is required when rejecting a booking' });
  }

  if (req.app.locals.dbConnected) {
    const booking = await Booking.findById(bookingId);
    if (!booking) {
      return res.status(404).json({ message: 'Booking not found' });
    }

    booking.status = status;
    if (status === 'rejected') {
      booking.rejectionReason = rejectionReason.trim();
    }
    await booking.save();

    return res.json({
      message: `Booking ${status} successfully`,
      data: sanitizeBooking(booking),
      source: 'database-session'
    });
  }

  const store = ensureFallbackStore(req.app);
  const booking = findFallbackBooking(store, bookingId);

  if (!booking) {
    return res.status(404).json({ message: 'Booking not found' });
  }

  booking.status = status;
  if (status === 'rejected') {
    booking.rejectionReason = rejectionReason.trim();
  }

  return res.json({
    message: `Booking ${status} successfully`,
    data: sanitizeBooking(booking),
    source: 'fallback-session'
  });
}
