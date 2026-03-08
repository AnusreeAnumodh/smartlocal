import mongoose from 'mongoose';

const sosAlertSchema = new mongoose.Schema(
  {
    userName: { type: String, default: 'Anonymous' },
    phone: { type: String, default: 'N/A' },
    latitude: { type: Number, required: true },
    longitude: { type: Number, required: true },
    status: { type: String, default: 'queued' }
  },
  { timestamps: true }
);

export const SosAlert = mongoose.model('SosAlert', sosAlertSchema);
