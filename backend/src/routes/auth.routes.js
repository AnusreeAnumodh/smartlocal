import { Router } from 'express';
import { login, registerAccount, registerProvider, registerUser, resetPassword } from '../controllers/auth.controller.js';

const router = Router();

router.post('/login', login);
router.post('/register', registerAccount);
router.post('/register/user', registerUser);
router.post('/register/provider', registerProvider);
router.post('/reset-password', resetPassword);

export default router;
