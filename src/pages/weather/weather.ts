import { Component } from "@angular/core";
import { NavController } from "ionic-angular";
import { WeatherService } from "../../services/weather.service";

@Component({
  selector: "weather-page",
  templateUrl: "weather.html"
})
export class WeatherPage {
  private originalState: any = {
    main: { temp: "" }
  };
  private weatherData: any;
  private text_length: number;

  constructor(
    public navCtrl: NavController,
    private weatherService: WeatherService
  ) {
    this.weatherData = this.originalState;
  }

  searchForWeather(event, key) {
    this.text_length = event.target.value.length;

    if (event.target.value.length > 2) {
      this.weatherService.getWeather(event.target.value).subscribe(
        data => {
          this.weatherData = data.json();
          console.log(this.weatherData);
        },
        err => {
          console.log(err);
        },
        () => console.log("weather search completed")
      );
    }
    else{
      Object.assign(this.weatherData,this.originalState);
    }
  }
}
