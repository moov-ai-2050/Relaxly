import { GridLayout } from '@nativescript/core';
import { Service } from '../../models/service.model';

export class ServiceList extends GridLayout {
    static items: Service[] = [];

    get items(): Service[] {
        return ServiceList.items;
    }

    set items(value: Service[]) {
        ServiceList.items = value;
    }
}