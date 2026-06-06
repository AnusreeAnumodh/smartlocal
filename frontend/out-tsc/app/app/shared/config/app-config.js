export const APP_META = {
    name: 'SmartLocal',
    eyebrow: 'SmartLocal',
    title: 'Service and Emergency Console',
    tagline: 'Fast local discovery, verified providers, and emergency-ready access.',
    authEyebrow: 'Connected local response',
    authTitle: 'Local help, faster and easier.',
    authIntro: 'Discover trusted providers, surface emergency options quickly, and switch between user and provider journeys without friction.',
    authPrimaryLabel: 'Live access',
    authPrimaryTitle: '24x7 emergency-first flow',
    authPrimaryCopy: 'Designed for fast action on mobile, tablet, and desktop with clear touch targets and bold visual feedback.'
};
export const SERVICE_CATEGORIES = [
    { value: 'plumber', label: 'Plumber' },
    { value: 'electrician', label: 'Electrician' },
    { value: 'medical_store', label: 'Medical Store' },
    { value: 'ambulance', label: 'Ambulance' }
];
export const ACCOUNT_TYPE_OPTIONS = [
    { value: 'individual', label: 'Individual' },
    { value: 'community', label: 'Community' }
];
export const ROLE_OPTIONS = [
    { value: 'user', label: 'User' },
    { value: 'provider', label: 'Provider' }
];
export const FRONTEND_DEFAULTS = {
    city: 'Ernakulam',
    category: SERVICE_CATEGORIES[0].value
};
export const CATEGORY_OFFERINGS = {
    plumber: ['Leak repair', 'Motor setup', 'Water tank maintenance'],
    electrician: ['Wiring check', 'Inverter support', 'Appliance installation'],
    medical_store: ['24x7 medicine support', 'Prescription pickup', 'Home delivery'],
    ambulance: ['Emergency pickup', 'Hospital transfer', 'Oxygen support']
};
//# sourceMappingURL=app-config.js.map