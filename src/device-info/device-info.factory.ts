import { Injectable } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { NavigatorNode, NavigatorNodeFactory} from "@c8y/ngx-components";
import { Observable } from "rxjs";

@Injectable()
export class DeviceInfoNavigationFactory implements NavigatorNodeFactory {
    
    get() {
        return new NavigatorNode({
            label: "Device Info",
            icon: "robot:",
            path: 'device-info',
            priority: 100
        });
    }
}