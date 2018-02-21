import { BrowserModule } from "@angular/platform-browser";
import { ErrorHandler, NgModule } from "@angular/core";
import {
  IonicApp,
  IonicErrorHandler,
  IonicModule,
  ModalController
} from "ionic-angular";
import { SplashScreen } from "@ionic-native/splash-screen";
import { StatusBar } from "@ionic-native/status-bar";
import { HttpModule } from "@angular/http";
import { Camera } from "@ionic-native/camera";
import { IonicStorageModule } from "@ionic/storage";

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
import { ProfileEditPage } from "../pages/profileedit/profileedit";
import { CameraPreview } from "@ionic-native/camera-preview";

@NgModule({
  declarations: [
    MyApp,
    TabsPage,
    HomePage,
    ProfilePage,
    TodoListPage,
    WeatherPage,
    ProfileEditPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    IonicStorageModule.forRoot(),
    HttpModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    TabsPage,
    HomePage,
    ProfilePage,
    TodoListPage,
    WeatherPage,
    ProfileEditPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    WeatherService,
    Camera,
    CameraPreview,
    ModalController,
    { provide: ErrorHandler, useClass: IonicErrorHandler }
  ]
})
export class AppModule {}
