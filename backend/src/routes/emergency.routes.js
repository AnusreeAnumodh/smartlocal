import { Router } from 'express';
import { analyzeEmergency, triggerSos, getProviderSosAlerts } from '../controllers/emergency.controller.js';

const router = Router();

router.post('/analyze', analyzeEmergency);
router.post('/sos', triggerSos);
router.get('/sos/provider/:providerId', getProviderSosAlerts);

export default router;
