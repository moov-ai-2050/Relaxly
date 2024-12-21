import { Observable } from '@nativescript/core';
import { SERVICES } from '../../models/service.model';
import { formatPrice } from '../../utils/price.utils';

export class BookingViewModel extends Observable {
    private _duration = 60;
    private _selectedDate = new Date();
    private _selectedServiceIndex = 0;

    constructor() {
        super();
        this.updatePrice();
    }

    get services() {
        return SERVICES;
    }

    get duration() {
        return this._duration;
    }

    set duration(value: number) {
        if (this._duration !== value) {
            this._duration = value;
            this.notifyPropertyChange('duration', value);
            this.updatePrice();
        }
    }

    get selectedDate() {
        return this._selectedDate;
    }

    set selectedDate(value: Date) {
        if (this._selectedDate !== value) {
            this._selectedDate = value;
            this.notifyPropertyChange('selectedDate', value);
        }
    }

    get selectedServiceIndex() {
        return this._selectedServiceIndex;
    }

    set selectedServiceIndex(value: number) {
        if (this._selectedServiceIndex !== value) {
            this._selectedServiceIndex = value;
            this.notifyPropertyChange('selectedServiceIndex', value);
            this.updatePrice();
        }
    }

    get formattedPrice() {
        const service = SERVICES[this._selectedServiceIndex];
        const price = (service.pricePerHour / 60) * this._duration;
        return formatPrice(price);
    }

    private updatePrice() {
        this.notifyPropertyChange('formattedPrice', this.formattedPrice);
    }

    onBookNow() {
        const service = SERVICES[this._selectedServiceIndex];
        alert(`Booking confirmed!\n\nService: ${service.name}\nDuration: ${this._duration} minutes\nPrice: ${this.formattedPrice}`);
    }
}