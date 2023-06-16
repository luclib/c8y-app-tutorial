import { Component, OnInit } from '@angular/core';
import { DeviceDetails, TemperatureMeasurement } from './device-info.models';
import { DeviceInfoService } from './device-info.service';

@Component({
    selector: 'c8y-device-info',
    templateUrl:'device-info.component.html',
    providers: [DeviceInfoService]
})
export class DeviceInfoComponent implements OnInit {
    temperatureMeasurement: TemperatureMeasurement;
    deviceDetails: DeviceDetails;

    constructor(private deviceInfoService: DeviceInfoService){}

    ngOnInit(): void {
        this.initDeviceDetails();
        this.subscribeForTemperatureMeasurements();
    }

    private async initDeviceDetails(){
        this.deviceDetails = await this.deviceInfoService.getDeviceDetails();
    }

    private subscribeForTemperatureMeasurements(): void {
        this.deviceInfoService.temperatureMeasurement$.subscribe(
            (temperatureMeasurement) => (this.temperatureMeasurement = temperatureMeasurement)
        );
        this.deviceInfoService.subscribeForTemperatureMeasurements();
    }
}