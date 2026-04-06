import { Router } from 'express';
import { getSmartLockOverview, updateSmartLock } from '../controllers/smart-lock.controller.js';

const router = Router();

router.get('/overview', getSmartLockOverview);
router.post('/action', updateSmartLock);

export default router;
