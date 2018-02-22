import { Component } from "@angular/core";
import { NavController } from "ionic-angular";
import { UserProfile } from "../../app/models/user-profile";
import { ProfileEditPage } from "../profileedit/profileedit";
import { Storage } from "@ionic/storage";
import { USER_PROFILE } from "../../util/constants";

@Component({
  selector: "profile-page",
  templateUrl: "profile.html"
})
export class ProfilePage {
  profile_picture: any;

  userProf: UserProfile;

  constructor(public navCtrl: NavController, private storage: Storage) {}

  ngOnInit() {
    console.log("in init");
    this.userProf = new UserProfile();
    this.gatherUser();
  }

  editProfile() {
    console.log("Editing");
    this.navCtrl.push(ProfileEditPage);
  }

  gatherUser() {
    let that = this;
    this.storage.get(USER_PROFILE).then(
      user => {
        Object.assign(that.userProf, user);
      },
      err => {
        console.log(err);
      }
    );
  }

  ionViewWillEnter() {
    console.log("in will enter");
    this.gatherUser();
  }
}
