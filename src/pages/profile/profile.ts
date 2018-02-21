import { Component } from "@angular/core";
import { NavController, ModalController, App } from "ionic-angular";
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

  constructor(
    public navCtrl: NavController,
    private storage: Storage,
    private modalCtrl: ModalController,
    public appCtrl: App
  ) {
    this.profile_picture = "assets/imgs/marty-avatar.png";
    this.userProf = new UserProfile();
  }

  ngOnInit() {
    this.gatherUser();
  }

  editProfile() {
    console.log("Editing");
    this.appCtrl.getRootNav().push(ProfileEditPage);
    //this.navCtrl.push(ProfileEditPage);
  }

  gatherUser() {
    this.storage.get(USER_PROFILE).then(
      user => {
        this.userProf = user;
      },
      err => {
        console.log(err);
      }
    );
  }

  ionViewDidLoad() {
    this.gatherUser();
  }

  ionViewWillEnter() {
    this.gatherUser();
  }
}
