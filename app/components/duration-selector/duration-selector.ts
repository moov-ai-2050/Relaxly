import { Observable } from '@nativescript/core';

export class DurationSelectorViewModel extends Observable {
    private _duration: number = 60;

    get duration(): number {
        return this._duration;
    }

    set duration(value: number) {
        if (this._duration !== value) {
            this._duration = value;
            this.notifyPropertyChange('duration', value);
            this.notify({ eventName: 'durationChanged', duration: value });
        }
    }
}