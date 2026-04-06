import { Router } from 'express';
import { analyzeEmergency, triggerSos } from '../controllers/emergency.controller.js';

const router = Router();

router.post('/analyze', analyzeEmergency);
router.post('/sos', triggerSos);

export default router;
