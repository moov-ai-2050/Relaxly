export interface Booking {
  id: string;
  clientId: string;
  therapistId: string;
  serviceType: ServiceType;
  date: Date;
  duration: number;
  status: BookingStatus;
  totalPrice: number;
  location: Location;
}

export enum ServiceType {
  REGULAR = 'regular',
  COUPLES = 'couples',
  B2B = 'b2b',
  FULL_SERVICE = 'full_service'
}

export enum BookingStatus {
  PENDING = 'pending',
  CONFIRMED = 'confirmed',
  CANCELLED = 'cancelled',
  COMPLETED = 'completed'
}

export interface Location {
  latitude: number;
  longitude: number;
  address: string;
}