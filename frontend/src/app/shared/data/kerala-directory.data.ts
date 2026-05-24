import { ProviderProfile } from '../../features/auth/models/provider-profile.model';
import { ServiceItem } from '../../features/dashboard/models/service-item.model';

const KERALA_DISTRICTS = [
  { city: 'Thiruvananthapuram', area: 'Pattom', plumber: 'Capital Flow Plumbing', plumberOwner: 'Arun Nair', electrician: 'Ananthapuri Electrical Care', electricianOwner: 'Midhun Das', medicalStore: 'Pattom Care Pharmacy', ambulance: 'Capital Rapid Ambulance' },
  { city: 'Kollam', area: 'Chinnakada', plumber: 'Kollam Pipe Point', plumberOwner: 'Nikhil Raj', electrician: 'Quilon Voltage Works', electricianOwner: 'Sajeev Kumar', medicalStore: 'Quilon Medics', ambulance: 'Kollam LifeLine Ambulance' },
  { city: 'Pathanamthitta', area: 'Adoor', plumber: 'Adoor Aqua Plumbing', plumberOwner: 'Ajith Thomas', electrician: 'Pathanam PowerFix', electricianOwner: 'Akhil Varghese', medicalStore: 'Adoor Family Pharmacy', ambulance: 'Pathanam Rescue Ambulance' },
  { city: 'Alappuzha', area: 'Mullakkal', plumber: 'Alleppey Pipe Rescue', plumberOwner: 'Binu Mathew', electrician: 'Backwater Electricals', electricianOwner: 'Rakesh Babu', medicalStore: 'Alleppey HealthPlus Pharmacy', ambulance: 'Alappuzha SeaBreeze Ambulance' },
  { city: 'Kottayam', area: 'Ettumanoor', plumber: 'Kottayam Leak Masters', plumberOwner: 'Jomon Joseph', electrician: 'Rubber Belt Electricals', electricianOwner: 'Libin George', medicalStore: 'Kottayam Health Hub', ambulance: 'Kottayam QuickCare Ambulance' },
  { city: 'Idukki', area: 'Thodupuzha', plumber: 'Highrange Plumbing Co', plumberOwner: 'Vishnu Mohan', electrician: 'HillView Electrical Support', electricianOwner: 'Nirmal Biju', medicalStore: 'Highrange MediMart', ambulance: 'Idukki Mountain Ambulance' },
  { city: 'Ernakulam', area: 'Marine Drive', plumber: 'Kochi Metro Plumbing', plumberOwner: 'Ravi Kumar', electrician: 'Ernakulam Power Care', electricianOwner: 'Naveen Paul', medicalStore: 'Metro Life Pharmacy', ambulance: 'Kochi Emergency Link' },
  { city: 'Thrissur', area: 'Swaraj Round', plumber: 'Thrissur Pipe Patrol', plumberOwner: 'Shyam Krishnan', electrician: 'Pooram City Electricals', electricianOwner: 'Arjun Menon', medicalStore: 'Thrissur LifeCare Pharmacy', ambulance: 'Thrissur Rapid Ambulance 24x7' },
  { city: 'Palakkad', area: 'Olavakkode', plumber: 'Palakkad WaterWorks', plumberOwner: 'Rahul Prasad', electrician: 'Palghat Voltage Experts', electricianOwner: 'Sarath Chandran', medicalStore: 'Palakkad Medilane', ambulance: 'Palakkad Swift Ambulance' },
  { city: 'Malappuram', area: 'Kottakkal', plumber: 'Malappuram Pipe Clinic', plumberOwner: 'Shabeer Ali', electrician: 'Malabar Electric Response', electricianOwner: 'Rinshad K', medicalStore: 'Kottakkal WellCare Pharmacy', ambulance: 'Malappuram Relief Ambulance' },
  { city: 'Kozhikode', area: 'Mavoor Road', plumber: 'Calicut Pipe Rescue', plumberOwner: 'Faisal Rahman', electrician: 'Calicut Power Grid Services', electricianOwner: 'Nihal Basheer', medicalStore: 'Calicut LifeCare Pharmacy', ambulance: 'Kozhikode City Ambulance' },
  { city: 'Wayanad', area: 'Kalpetta', plumber: 'Wayanad Spring Plumbing', plumberOwner: 'Sandeep Balan', electrician: 'Highland Electric Aid', electricianOwner: 'Rinto Sebastian', medicalStore: 'Kalpetta MediPoint', ambulance: 'Wayanad Hill Rescue Ambulance' },
  { city: 'Kannur', area: 'Talap', plumber: 'Kannur PipeGuard', plumberOwner: 'Jithin Raj', electrician: 'Kannur HomeSafe Electricals', electricianOwner: 'Rohith K', medicalStore: 'Kannur Care Pharmacy', ambulance: 'Kannur Coast Ambulance' },
  { city: 'Kasaragod', area: 'Vidyanagar', plumber: 'Kasaragod FlowFix', plumberOwner: 'Ashraf C H', electrician: 'North Kerala Electrical Hub', electricianOwner: 'Niyas Ahmed', medicalStore: 'Kasaragod MediTrust', ambulance: 'Kasaragod 24x7 Ambulance' }
] as const;

export const KERALA_CITIES = KERALA_DISTRICTS.map((district) => district.city);

export const DEMO_PROVIDERS: ProviderProfile[] = KERALA_DISTRICTS.flatMap((district, districtIndex) => {
  const baseNumber = 1000 + districtIndex * 10;
  const createdAt = new Date().toISOString();

  return [
    { id: `provider-demo-${districtIndex + 1}-plumber`, userId: `user-demo-${districtIndex + 1}-plumber`, businessName: district.plumber, ownerName: district.plumberOwner, mobile: `+91-90000${baseNumber}1`, email: `plumber${districtIndex + 1}@smartlocal.app`, category: 'plumber', city: district.city, address: `${district.area}, ${district.city}`, availability: districtIndex % 3 === 0 ? 'busy' : 'available', experienceYears: 5 + (districtIndex % 6), verified: districtIndex % 4 !== 1, rating: Number((4.4 + ((districtIndex + 1) % 5) * 0.1).toFixed(1)), responseTimeMinutes: 5 + (districtIndex % 7), highResponseRate: districtIndex % 2 === 0, createdAt },
    { id: `provider-demo-${districtIndex + 1}-electrician`, userId: `user-demo-${districtIndex + 1}-electrician`, businessName: district.electrician, ownerName: district.electricianOwner, mobile: `+91-90000${baseNumber}2`, email: `electrician${districtIndex + 1}@smartlocal.app`, category: 'electrician', city: district.city, address: `${district.area}, ${district.city}`, availability: districtIndex % 5 === 0 ? 'busy' : 'available', experienceYears: 4 + (districtIndex % 7), verified: districtIndex % 4 !== 2, rating: Number((4.3 + ((districtIndex + 2) % 6) * 0.1).toFixed(1)), responseTimeMinutes: 6 + (districtIndex % 8), highResponseRate: districtIndex % 3 !== 0, createdAt },
    { id: `provider-demo-${districtIndex + 1}-medical-store`, userId: `user-demo-${districtIndex + 1}-medical-store`, businessName: district.medicalStore, ownerName: `${district.city} Pharmacist`, mobile: `+91-90000${baseNumber}3`, email: `medical${districtIndex + 1}@smartlocal.app`, category: 'medical_store', city: district.city, address: `${district.area}, ${district.city}`, availability: 'available', experienceYears: 6 + (districtIndex % 5), verified: true, rating: Number((4.5 + (districtIndex % 4) * 0.1).toFixed(1)), responseTimeMinutes: 4 + (districtIndex % 6), highResponseRate: true, createdAt },
    { id: `provider-demo-${districtIndex + 1}-ambulance`, userId: `user-demo-${districtIndex + 1}-ambulance`, businessName: district.ambulance, ownerName: `${district.city} Dispatch`, mobile: `+91-90000${baseNumber}4`, email: `ambulance${districtIndex + 1}@smartlocal.app`, category: 'ambulance', city: district.city, address: `${district.area}, ${district.city}`, availability: 'available', experienceYears: 7 + (districtIndex % 4), verified: true, rating: Number((4.7 + (districtIndex % 3) * 0.1).toFixed(1)), responseTimeMinutes: 3 + (districtIndex % 5), highResponseRate: true, createdAt }
  ];
});

export const DEMO_SERVICES: ServiceItem[] = DEMO_PROVIDERS.map((provider) => ({
  _id: provider.id,
  category: provider.category,
  name: provider.businessName,
  phone: provider.mobile,
  city: provider.city,
  verified: provider.verified,
  rating: provider.rating,
  responseTimeMinutes: provider.responseTimeMinutes,
  availability: provider.availability,
  highResponseRate: provider.highResponseRate
}));
