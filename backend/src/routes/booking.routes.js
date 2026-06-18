import { Router } from 'express';
import {
  createBooking,
  getUserBookings,
  getProviderBookings,
  getBookingById,
  updateBookingStatus,
  markFeedbackGiven
} from '../controllers/booking.controller.js';

const router = Router();

router.post('/', createBooking);
router.get('/user', getUserBookings);
router.get('/provider', getProviderBookings);
router.get('/:bookingId', getBookingById);
router.patch('/:bookingId/status', updateBookingStatus);
router.patch('/:bookingId/feedback', markFeedbackGiven);

export default router;
