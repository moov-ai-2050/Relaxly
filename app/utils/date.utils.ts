import { format } from 'date-fns';

export function formatDateTime(date: Date): string {
    return format(date, 'MMM dd, yyyy HH:mm');
}

export function validateBookingTime(date: Date): boolean {
    const now = new Date();
    return date > now;
}

export function roundToNearestHour(date: Date): Date {
    const rounded = new Date(date);
    rounded.setMinutes(0);
    rounded.setSeconds(0);
    rounded.setMilliseconds(0);
    rounded.setHours(rounded.getHours() + 1);
    return rounded;
}