import { Observable } from '@nativescript/core';
import { Service } from '../../models/service.model';

export class ServiceCardViewModel extends Observable {
    constructor(private service: Service) {
        super();
    }

    get name(): string {
        return this.service.name;
    }

    get description(): string {
        return this.service.description;
    }

    get pricePerHour(): number {
        return this.service.pricePerHour;
    }
}