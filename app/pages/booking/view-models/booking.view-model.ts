import { Observable } from '@nativescript/core';
import { BookingService } from '../../../services/booking.service';
import { ServiceType } from '../../../models/booking.model';
import { SERVICES } from '../../../models/service.model';
import { validateBookingTime, roundToNearestHour } from '../../../utils/date.utils';
import { calculateTotalPrice, formatPrice } from '../../../utils/price.utils';

export class BookingViewModel extends Observable {
    private bookingService: BookingService;
    private _duration: number = 60;
    private _selectedDate: Date = roundToNearestHour(new Date());
    private _selectedService: ServiceType | null = null;
    private _totalPrice: number = 0;
    private _errorMessage: string = '';

    constructor() {
        super();
        this.bookingService = new BookingService();
        this.services = SERVICES;
    }

    get duration(): number {
        return this._duration;
    }

    set duration(value: number) {
        if (this._duration !== value) {
            this._duration = value;
            this.notifyPropertyChange('duration', value);
            this.updateTotalPrice();
        }
    }

    get selectedDate(): Date {
        return this._selectedDate;
    }

    set selectedDate(value: Date) {
        if (this._selectedDate !== value) {
            this._selectedDate = value;
            this.notifyPropertyChange('selectedDate', value);
            this.validateBooking();
        }
    }

    get formattedPrice(): string {
        return formatPrice(this._totalPrice);
    }

    get errorMessage(): string {
        return this._errorMessage;
    }

    private updateTotalPrice(): void {
        if (this._selectedService) {
            const service = SERVICES.find(s => s.type === this._selectedService);
            if (service) {
                this._totalPrice = calculateTotalPrice(service.pricePerHour, this._duration);
                this.notifyPropertyChange('formattedPrice', this.formattedPrice);
            }
        }
    }

    private validateBooking(): void {
        if (!validateBookingTime(this._selectedDate)) {
            this._errorMessage = 'Please select a future date and time';
            this.notifyPropertyChange('errorMessage', this._errorMessage);
            return;
        }
        this._errorMessage = '';
        this.notifyPropertyChange('errorMessage', this._errorMessage);
    }

    async onBookNow(): Promise<void> {
        if (!this._selectedService || !this.validateBooking()) {
            return;
        }

        try {
            await this.bookingService.createBooking({
                serviceType: this._selectedService,
                duration: this._duration,
                date: this._selectedDate,
                location: {
                    latitude: 0,
                    longitude: 0,
                    address: ''
                }
            });
        } catch (error) {
            this._errorMessage = 'Booking failed. Please try again.';
            this.notifyPropertyChange('errorMessage', this._errorMessage);
        }
    }
}