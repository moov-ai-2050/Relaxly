import { EventData, Page } from '@nativescript/core';
import { BookingViewModel } from './booking-view-model';

export function onNavigatingTo(args: EventData) {
    const page = <Page>args.object;
    page.bindingContext = new BookingViewModel();
}