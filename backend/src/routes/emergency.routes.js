import { Router } from 'express';
import { triggerSos } from '../controllers/emergency.controller.js';

const router = Router();

router.post('/sos', triggerSos);

export default router;
