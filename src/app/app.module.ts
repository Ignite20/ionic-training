import { BrowserModule } from "@angular/platform-browser";
import { ErrorHandler, NgModule } from "@angular/core";
import { IonicApp, IonicErrorHandler, IonicModule } from "ionic-angular";
import { SplashScreen } from "@ionic-native/splash-screen";
import { StatusBar } from "@ionic-native/status-bar";
import { HttpModule } from "@angular/http";

// Pages
import { MyApp } from "./app.component";
import { HomePage } from "../pages/home/home";
import { ProfilePage } from "../pages/profile/profile";
import { TodoListPage } from "../pages/todolist/todolist";
import { WeatherPage } from "../pages/weather/weather";

// Navigations
import { TabsPage } from "../pages/tabs/tabs";

// Services
import { WeatherService } from "../services/weather.service";

@NgModule({
  declarations: [
    MyApp,
    TabsPage,
    HomePage,
    ProfilePage,
    TodoListPage,
    WeatherPage
  ],
  imports: [BrowserModule, IonicModule.forRoot(MyApp), HttpModule],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    TabsPage,
    HomePage,
    ProfilePage,
    TodoListPage,
    WeatherPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    WeatherService,
    { provide: ErrorHandler, useClass: IonicErrorHandler }
  ]
})
export class AppModule {}
