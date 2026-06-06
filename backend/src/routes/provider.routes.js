import { Router } from 'express';
import { createProviderReview, listProviderReviews, listProviders } from '../controllers/provider.controller.js';

const router = Router();

router.get('/', listProviders);
router.get('/:providerId/reviews', listProviderReviews);
router.post('/:providerId/reviews', createProviderReview);

export default router;
