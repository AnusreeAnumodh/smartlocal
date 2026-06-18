import mongoose from 'mongoose';

const bookingSchema = new mongoose.Schema(
  {
    userId: { type: String, required: true, index: true },
    providerId: { type: String, required: true, index: true },
    serviceCategory: { type: String, required: true, lowercase: true, trim: true },
    scheduledDate: { type: String, required: true, trim: true },
    scheduledTime: { type: String, required: true, trim: true },
    status: {
      type: String,
      enum: ['pending', 'accepted', 'rejected', 'completed'],
      default: 'pending'
    },
    rejectionReason: { type: String, default: '', trim: true },
    notes: { type: String, default: '', trim: true },
    userName: { type: String, default: '', trim: true },
    userPhone: { type: String, default: '', trim: true },
    userEmail: { type: String, default: '', trim: true },
    businessName: { type: String, default: '', trim: true },
    providerPhone: { type: String, default: '', trim: true },
    feedbackGiven: { type: Boolean, default: false }
  },
  { timestamps: true }
);

bookingSchema.index({ userId: 1, createdAt: -1 });
bookingSchema.index({ providerId: 1, createdAt: -1 });

export const Booking = mongoose.model('Booking', bookingSchema);
