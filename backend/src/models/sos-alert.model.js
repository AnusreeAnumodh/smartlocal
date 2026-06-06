import mongoose from 'mongoose';

const sosAlertSchema = new mongoose.Schema(
  {
    userName: { type: String, default: 'Anonymous' },
    userId: { type: String, default: '' },
    phone: { type: String, default: 'N/A' },
    city: { type: String, default: '' },
    emergencyType: { type: String, default: 'general' },
    description: { type: String, default: '', trim: true },
    latitude: { type: Number, required: true },
    longitude: { type: Number, required: true },
    status: { type: String, default: 'queued' },
    priority: { type: String, default: 'medium' },
    recommendedActions: { type: [String], default: [] },
    assignedProviderCategory: { type: String, default: '' }
  },
  { timestamps: true }
);

export const SosAlert = mongoose.model('SosAlert', sosAlertSchema);
