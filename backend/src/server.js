import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import healthRoutes from './routes/health.routes.js';
import serviceRoutes from './routes/service.routes.js';
import emergencyRoutes from './routes/emergency.routes.js';
import smartLockRoutes from './routes/smart-lock.routes.js';
import authRoutes from './routes/auth.routes.js';
import providerRoutes from './routes/provider.routes.js';
import { connectDB } from './config/db.js';
import { bootstrapServices } from './controllers/service.controller.js';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;
const ALLOW_START_WITHOUT_DB = process.env.ALLOW_START_WITHOUT_DB === 'true';

app.locals.dbConnected = false;
app.locals.allowStartWithoutDb = ALLOW_START_WITHOUT_DB;

app.use(cors({ origin: process.env.FRONTEND_URL || '*' }));
app.use(express.json());

app.use('/api/health', healthRoutes);
app.use('/api/auth', authRoutes);
app.use('/api/services', serviceRoutes);
app.use('/api/providers', providerRoutes);
app.use('/api/emergency', emergencyRoutes);
app.use('/api/smart-lock', smartLockRoutes);

app.get('/', (_req, res) => {
  res.json({
    message: 'Smart Local Services Finder API',
    docs: {
      health: '/api/health',
      authLogin: '/api/auth/login',
      authRegisterProvider: '/api/auth/register/provider',
      services: '/api/services',
      providers: '/api/providers',
      emergency: '/api/emergency/sos',
      smartLock: '/api/smart-lock/overview'
    }
  });
});

async function startServer() {
  try {
    await connectDB();
    await bootstrapServices();
    app.locals.dbConnected = true;
  } catch (error) {
    if (!ALLOW_START_WITHOUT_DB) {
      console.error('Failed to start server:', error.message);
      process.exit(1);
    }

    console.warn('MongoDB unavailable. Starting in fallback mode without DB.');
    console.warn(`DB error: ${error.message}`);
  }

  app.listen(PORT, () => {
    const mode = app.locals.dbConnected ? 'database' : 'fallback';
    console.log(`Backend running on http://localhost:${PORT} (${mode} mode)`);
  });
}

startServer();
