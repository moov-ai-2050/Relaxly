import { Service, SERVICES } from '../models/service.model';
import { ServiceType } from '../models/booking.model';

export function validateDuration(serviceType: ServiceType, duration: number): boolean {
  const service = SERVICES.find(s => s.type === serviceType);
  if (!service) return false;
  
  return duration >= service.minDuration && duration <= service.maxDuration;
}

export function validateLocation(latitude: number, longitude: number): boolean {
  return (
    latitude >= -90 && 
    latitude <= 90 && 
    longitude >= -180 && 
    longitude <= 180
  );
}

export function getServiceDetails(serviceType: ServiceType): Service | undefined {
  return SERVICES.find(s => s.type === serviceType);
}