import mongoose from 'mongoose';

const providerSchema = new mongoose.Schema(
  {
    userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true, index: true },
    businessName: { type: String, required: true, trim: true },
    ownerName: { type: String, required: true, trim: true },
    mobile: { type: String, required: true, trim: true, unique: true },
    email: { type: String, default: '', trim: true, lowercase: true },
    category: { type: String, required: true, lowercase: true, trim: true },
    city: { type: String, required: true, trim: true },
    address: { type: String, default: '', trim: true },
    availability: { type: String, default: 'available', trim: true },
    experienceYears: { type: Number, default: 1 },
    verified: { type: Boolean, default: false },
    rating: { type: Number, default: 4.2 },
    reviewCount: { type: Number, default: 0 },
    responseTimeMinutes: { type: Number, default: 15 },
    highResponseRate: { type: Boolean, default: false }
  },
  { timestamps: true }
);

export const Provider = mongoose.model('Provider', providerSchema);
