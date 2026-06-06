import { Router } from 'express';
import {
  getAdminOverview,
  updateProviderVerification,
  updateSosStatus,
  updateUserApprovalStatus,
  updateUserRole
} from '../controllers/admin.controller.js';

const router = Router();

router.get('/overview', getAdminOverview);
router.patch('/providers/:providerId/verification', updateProviderVerification);
router.patch('/users/:userId/approval-status', updateUserApprovalStatus);
router.patch('/users/:userId/role', updateUserRole);
router.patch('/sos-alerts/:alertId/status', updateSosStatus);

export default router;
