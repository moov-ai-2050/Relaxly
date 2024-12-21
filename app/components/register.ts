import { registerElement } from '@nativescript/core';

export function registerComponents() {
    registerElement('service-card', () => require('./service-card/service-card').ServiceCard);
    registerElement('duration-selector', () => require('./duration-selector/duration-selector').DurationSelector);
    registerElement('service-list', () => require('./service-list/service-list').ServiceList);
}