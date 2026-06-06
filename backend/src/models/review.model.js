import mongoose from 'mongoose';

const reviewSchema = new mongoose.Schema(
  {
    providerId: { type: String, required: true, index: true },
    userId: { type: String, required: true, index: true },
    userName: { type: String, required: true, trim: true },
    rating: { type: Number, required: true, min: 1, max: 5 },
    comment: { type: String, default: '', trim: true, maxlength: 500 }
  },
  { timestamps: true }
);

export const Review = mongoose.model('Review', reviewSchema);
