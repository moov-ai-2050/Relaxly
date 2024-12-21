import { ServiceType, Booking, Location } from '../models/booking.model';
import { SERVICES } from '../models/service.model';

export class BookingService {
    calculatePrice(serviceType: ServiceType, duration: number): number {
        const service = SERVICES.find(s => s.type === serviceType);
        if (!service) {
            throw new Error('Invalid service type');
        }
        
        const totalDuration = duration + 15; // Add preparation time
        return (service.pricePerHour / 60) * totalDuration;
    }

    async createBooking(booking: {
        serviceType: ServiceType;
        duration: number;
        date: Date;
        location: Location;
    }): Promise<Booking> {
        // Implementation will be added when backend is ready
        throw new Error('Not implemented');
    }
}