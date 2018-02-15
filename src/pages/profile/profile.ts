import { Component } from "@angular/core";
import { NavController } from "ionic-angular";
import { UserProfile } from "../../app/models/user-profile";

@Component({
  selector: "profile-page",
  templateUrl: "profile.html"
})
export class ProfilePage {
  profile_picture: any;

  userProf: UserProfile;

  constructor(public navCtrl: NavController) {
    this.profile_picture = "assets/imgs/marty-avatar.png";

    this.userProf = new UserProfile(
      "Developer",
      25,
      "Analyst",
      "Motorcycles",
      this.profile_picture
    );
  }
}
