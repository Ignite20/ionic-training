import { Injectable } from "@angular/core";
import { Http } from "@angular/http";
import "rxjs/add/operator/map";

@Injectable()
export class WeatherService {
  city: string;

  url: string = "http://api.openweathermap.org/data/2.5/weather?q=";
  iconUrl: string = "http://openweathermap.org/img/w/";
  api_part: string = "&units=metric&lang=es&APPID=1fd57b584861066e459bbcf9bc78addf";

  constructor(private http: Http) {}

  getFullUrl(city: string) {
    return this.url + city + this.api_part;
  }

  getWeather(city: string) {
    let response = this.http.get(this.getFullUrl(city));
    console.log(response);
    return response;
  }

  getWeatherIcon(icon: string) {
    let mIcon = this.iconUrl + icon + ".png";
    console.log(mIcon);
    return mIcon;
  }
}
