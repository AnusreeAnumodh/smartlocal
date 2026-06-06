import mongoose from 'mongoose';

const userSchema = new mongoose.Schema(
  {
    fullName: { type: String, required: true, trim: true },
    mobile: { type: String, required: true, trim: true, unique: true },
    email: { type: String, default: '', trim: true, lowercase: true },
    password: { type: String, required: true, trim: true },
    role: { type: String, enum: ['user', 'provider', 'admin', 'super_admin'], required: true },
    approvalStatus: { type: String, enum: ['approved', 'pending', 'suspended'], default: 'approved' },
    isActive: { type: Boolean, default: true },
    accountType: { type: String, enum: ['individual', 'community'], default: 'individual' },
    communityName: { type: String, default: '', trim: true },
    locality: { type: String, default: '', trim: true }
  },
  { timestamps: true }
);

export const User = mongoose.model('User', userSchema);
