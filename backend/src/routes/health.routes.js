import { Router } from 'express';

const router = Router();

router.get('/', (req, res) => {
  res.json({
    status: 'ok',
    service: 'smartlocal-backend',
    dbConnected: Boolean(req.app.locals.dbConnected),
    mode: req.app.locals.dbConnected ? 'database' : 'fallback',
    timestamp: new Date().toISOString()
  });
});

export default router;
