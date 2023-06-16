import { Injectable, resolveForwardRef } from '@angular/core';
import { Subject } from 'rxjs';
import { DeviceDetails, TemperatureMeasurement } from './device-info.models';

@Injectable()
export class DeviceInfoService {
    // Set up a subject field to publish incoming temperature measurements
    temperatureMeasurement$: Subject<TemperatureMeasurement> = new Subject<TemperatureMeasurement>();

    constructor() {}

    // return mocked device info as a Promise object
    async getDeviceDetails(): Promise<DeviceDetails> {
        return new Promise<DeviceDetails> ((resolve) => {
            resolve({name: 'My test device', type: 'c8y_TestType'})
        });
    }

    // Creates temperature measurements initially at 10°C and then a random measurement
    // at intervals of 10 seconds.
    subscribeForTemperatureMeasurements(): void {
        // publish latest measurement
        this.temperatureMeasurement$.next({ value: 10, unit: '°C' })

        // push random temperature every 10 seconds
        setInterval(
            () => this.temperatureMeasurement$.next({ value: this.getRandomInt(8, 15), unit: '°C' }),
            1000
        );
    }

    private getRandomInt(min, max){
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max -min) + min)
    }
}