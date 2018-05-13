import { Component } from '@angular/core';
import { IpService } from './ip.service';

@Component({
    selector: 'app-ip',
    template:'{{ip}}',
    providers: [IpService]
})
export class IpComponent {
    ip: String;
    constructor( private http : IpService){
        http.getWeather("hanoi")
        .then(res => this.ip= res)
    }
}