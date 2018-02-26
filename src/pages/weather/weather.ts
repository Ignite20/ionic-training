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
  private weatherIcon: any;

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
          this.weatherIcon = this.weatherService.getWeatherIcon(
            this.weatherData.weather[0].icon
          );
          console.log("icon: " + this.weatherIcon);
          console.log(this.weatherData);
        },
        err => {
          console.log(err);
        },
        () => console.log("weather search completed")
      );
    } else {
      Object.assign(this.weatherData, this.originalState);
      this.weatherIcon = "";
    }
  }
}
