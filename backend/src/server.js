import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import healthRoutes from './routes/health.routes.js';
import serviceRoutes from './routes/service.routes.js';
import emergencyRoutes from './routes/emergency.routes.js';
import { connectDB } from './config/db.js';
import { bootstrapServices } from './controllers/service.controller.js';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors({ origin: process.env.FRONTEND_URL || '*' }));
app.use(express.json());

app.use('/api/health', healthRoutes);
app.use('/api/services', serviceRoutes);
app.use('/api/emergency', emergencyRoutes);

app.get('/', (_req, res) => {
  res.json({
    message: 'Smart Local Services Finder API',
    docs: {
      health: '/api/health',
      services: '/api/services',
      emergency: '/api/emergency/sos'
    }
  });
});

async function startServer() {
  try {
    await connectDB();
    await bootstrapServices();

    app.listen(PORT, () => {
      console.log(`Backend running on http://localhost:${PORT}`);
    });
  } catch (error) {
    console.error('Failed to start server:', error.message);
    process.exit(1);
  }
}

startServer();
