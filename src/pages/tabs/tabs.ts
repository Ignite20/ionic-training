import { Component } from "@angular/core";

// Pages to redirect
import { HomePage } from "../home/home";
import { ProfilePage } from "../profile/profile";
import { TodoListPage } from "../todolist/todolist";
import { WeatherPage } from "../weather/weather";
import { NavController } from "ionic-angular";

@Component({
  templateUrl: "tabs.html"
})
export class TabsPage {
  tabHome: any = HomePage;
  tabProfile: any = ProfilePage;
  tabTodoList: any = TodoListPage;
  tabWeather: any = WeatherPage;

  constructor(public navCtrl: NavController) {}

  swipeEvent(e) {
    console.log(e);

    switch (e.direction) {
      //Left
      case 2:
        break;
      //Right
      case 4:
        break;
    }
    /*
    if (e.direction == "2") {
      this.navCtrl.parent.select(2);
    } else if (e.direction == "4") {
      this.navCtrl.parent.select(0);
    }
    */
  }
}
