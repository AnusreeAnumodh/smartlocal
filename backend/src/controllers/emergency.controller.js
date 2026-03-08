import { SosAlert } from '../models/sos-alert.model.js';

export async function triggerSos(req, res) {
  try {
    const { userName = 'Anonymous', phone = 'N/A', latitude, longitude } = req.body || {};

    if (latitude == null || longitude == null) {
      return res.status(400).json({
        message: 'latitude and longitude are required for SOS alerts'
      });
    }

    const alert = await SosAlert.create({
      userName,
      phone,
      latitude,
      longitude,
      status: 'queued'
    });

    return res.status(202).json({
      message: 'SOS alert accepted',
      alert: {
        id: alert._id,
        userName: alert.userName,
        phone: alert.phone,
        location: { latitude: alert.latitude, longitude: alert.longitude },
        createdAt: alert.createdAt,
        status: alert.status
      }
    });
  } catch (error) {
    return res.status(500).json({
      message: 'Failed to create SOS alert',
      error: error.message
    });
  }
}
