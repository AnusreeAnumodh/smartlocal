import mongoose from 'mongoose';

const serviceSchema = new mongoose.Schema(
  {
    category: { type: String, required: true, lowercase: true, trim: true },
    name: { type: String, required: true, trim: true },
    phone: { type: String, required: true, trim: true },
    city: { type: String, required: true, trim: true },
    verified: { type: Boolean, default: false },
    rating: { type: Number, default: 4.2 },
    responseTimeMinutes: { type: Number, default: 15 },
    availability: { type: String, default: 'available' },
    highResponseRate: { type: Boolean, default: false }
  },
  { timestamps: true }
);

export const Service = mongoose.model('Service', serviceSchema);
