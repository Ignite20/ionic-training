import { Component } from "@angular/core";
import { NavController, ModalController } from "ionic-angular";
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
    private modalCtrl: ModalController
  ) {
    this.profile_picture = "assets/imgs/marty-avatar.png";
    this.userProf = new UserProfile();
    //this.gatherUser();
  }

  ngOnInit() {
    this.gatherUser();
  }

  editProfile() {
    console.log("Editing");
    /*
    let modal = this.modalCtrl.create(ProfileEditPage);
    modal.onDidDismiss(user => {
      this.userProf = user;
    });
    modal.present();
    */
    /* this.navCtrl.push(ProfileEditPage); */

    let modal = this.modalCtrl.create(ProfileEditPage, {});
    modal.present();
  }

  gatherUser() {
    this.storage.get(USER_PROFILE).then(
      user => {
        console.log(user);
        if (user != undefined) {
          this.userProf = user;
        }
      },
      err => {
        console.log(err);
      }
    );
  }

  ionViewWillEnter() {
    this.gatherUser();
  }
}
