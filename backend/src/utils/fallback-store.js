export function ensureFallbackStore(app) {
  if (!app.locals.fallbackStore) {
    const createdAt = new Date().toISOString();
    app.locals.fallbackStore = {
      users: [
        {
          id: 'user-demo-super-admin',
          fullName: 'Sana Super Admin',
          mobile: '+91-9000000009',
          email: 'superadmin@smartlocal.app',
          password: 'super123',
          role: 'super_admin',
          approvalStatus: 'approved',
          isActive: true,
          accountType: 'individual',
          createdAt
        },
        {
          id: 'user-demo-admin',
          fullName: 'Aarav Admin',
          mobile: '+91-9000000100',
          email: 'admin@smartlocal.app',
          password: 'admin123',
          role: 'admin',
          approvalStatus: 'approved',
          isActive: true,
          accountType: 'individual',
          createdAt
        },
        {
          id: 'user-demo-public',
          fullName: 'Anjali Joseph',
          mobile: '+91-9000000200',
          email: 'anjali@smartlocal.app',
          password: 'user123',
          role: 'user',
          approvalStatus: 'approved',
          isActive: true,
          accountType: 'community',
          communityName: 'Kochi Residents Forum',
          locality: 'Kochi',
          createdAt
        },
        {
          id: 'user-demo-provider',
          fullName: 'Ravi Kumar',
          mobile: '+91-9000000001',
          email: 'ravi@smartlocal.app',
          password: 'provider123',
          role: 'provider',
          approvalStatus: 'pending',
          isActive: true,
          accountType: 'individual',
          createdAt
        }
      ],
      providers: [
        {
          id: 'provider-demo-1',
          userId: 'user-demo-provider',
          businessName: 'Ravi Plumbing Services',
          ownerName: 'Ravi Kumar',
          mobile: '+91-9000000001',
          email: 'ravi@smartlocal.app',
          category: 'plumber',
          city: 'Ernakulam',
          address: 'Marine Drive, Ernakulam',
          availability: 'available',
          experienceYears: 7,
          verified: true,
          rating: 4.5,
          reviewCount: 2,
          responseTimeMinutes: 5,
          highResponseRate: true,
          createdAt
        }
      ],
      reviews: [
        {
          id: 'review-demo-1',
          providerId: 'provider-demo-1',
          userId: 'user-demo-public',
          userName: 'Anjali Joseph',
          rating: 5,
          comment: 'Reached quickly and fixed the leak without follow-up issues.',
          createdAt: new Date(Date.now() - 1000 * 60 * 60 * 18).toISOString()
        },
        {
          id: 'review-demo-2',
          providerId: 'provider-demo-1',
          userId: 'user-demo-admin',
          userName: 'Aarav Admin',
          rating: 4,
          comment: 'Clear communication and tidy work.',
          createdAt: new Date(Date.now() - 1000 * 60 * 60 * 36).toISOString()
        }
      ],
      sosAlerts: [],
      bookings: []
    };
  }

  return app.locals.fallbackStore;
}
