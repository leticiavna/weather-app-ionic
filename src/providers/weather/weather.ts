import { HttpClient } from '@angular/common/http';
import { HttpClientModule } from '@angular/common/http';
import { Http } from '@angular/http';
import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';

@Injectable()
export class WeatherProvider {
  apiKey = '1b61f0020e6cdde8';
  url;


  constructor(public http: HttpClient) {
    console.log('Hello WeatherProvider Provider');
    this.url = 'http://api.wunderground.com/api/'+this.apiKey+'/conditions/q';
  }

  getWeather(city, state) {
    return this.http.get(this.url+'/'+state+'/'+city+'.json')
    .map(res => res);
  }
}
