import { Router } from 'express';
import { listServices, recommendService } from '../controllers/service.controller.js';

const router = Router();

router.get('/recommendation', recommendService);
router.get('/', listServices);

export default router;
