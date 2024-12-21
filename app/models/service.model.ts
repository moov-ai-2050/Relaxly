export interface Service {
  type: ServiceType;
  name: string;
  description: string;
  pricePerHour: number;
  minDuration: number;
  maxDuration: number;
}

export const SERVICES: Service[] = [
  {
    type: ServiceType.REGULAR,
    name: 'Regular Massage',
    description: 'Traditional massage therapy',
    pricePerHour: 300,
    minDuration: 60,
    maxDuration: 120
  },
  {
    type: ServiceType.COUPLES,
    name: 'Couples Massage',
    description: 'Relaxing massage for couples',
    pricePerHour: 700,
    minDuration: 60,
    maxDuration: 120
  },
  {
    type: ServiceType.B2B,
    name: 'B2B Massage',
    description: 'Corporate massage service',
    pricePerHour: 600,
    minDuration: 60,
    maxDuration: 240
  },
  {
    type: ServiceType.FULL_SERVICE,
    name: 'Full Service',
    description: 'Complete massage therapy package',
    pricePerHour: 1000,
    minDuration: 90,
    maxDuration: 180
  }
];