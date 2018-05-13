import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/toPromise';

@Injectable()

export class IpService {
    constructor( private http: Http) {}
    getIp(){
        return this.http.get('http://ip.jsontest.com/')
        .toPromise()
        .then(res => res.json())
        .then(resJson => resJson.ip);
    };
    getWeather(cityName: string){
        var apiUrl = 'http://api.openweathermap.org/data/2.5/weather?&appid=58d7143e8d3b465efbd462516a49c7c1&units=metric&q=' + cityName;
        return this.http.get(apiUrl)
        .toPromise()
        .then(res => res.json())
        .then(resJson => resJson.main.temp);
    }
}