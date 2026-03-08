import mongoose from 'mongoose';

const serviceSchema = new mongoose.Schema(
  {
    category: { type: String, required: true, lowercase: true, trim: true },
    name: { type: String, required: true, trim: true },
    phone: { type: String, required: true, trim: true },
    city: { type: String, required: true, trim: true },
    verified: { type: Boolean, default: false }
  },
  { timestamps: true }
);

export const Service = mongoose.model('Service', serviceSchema);
