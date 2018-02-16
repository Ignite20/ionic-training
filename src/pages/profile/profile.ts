import { Component } from "@angular/core";
import { NavController } from "ionic-angular";
import { UserProfile } from "../../app/models/user-profile";
import { CameraOptions, Camera } from "@ionic-native/camera";

@Component({
  selector: "profile-page",
  templateUrl: "profile.html"
})
export class ProfilePage {
  profile_picture: any;

  userProf: UserProfile;

  options: CameraOptions = {
    quality: 100,
    targetWidth: 100,
    targetHeight: 100,
    destinationType: this.camera.DestinationType.FILE_URI,
    encodingType: this.camera.EncodingType.JPEG,
    mediaType: this.camera.MediaType.PICTURE
  };

  constructor(public navCtrl: NavController, private camera: Camera) {
    this.profile_picture = "assets/imgs/marty-avatar.png";

    this.userProf = new UserProfile(
      "John",
      25,
      "Developer",
      "Motorcycles",
      this.profile_picture
    );
  }

  openCamera() {
    this.camera.getPicture(this.options).then(
      imageData => {
        console.log(imageData);
        this.userProf.picture_url = imageData;
        //this.profile_picture = "data:image/jpeg;base64," + imageData;
      },
      err => {
        console.log(err);
      }
    );
  }
}
