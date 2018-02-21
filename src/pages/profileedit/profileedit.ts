import { Component } from "@angular/core";
import { NavController } from "ionic-angular";
import { Storage } from "@ionic/storage";
import { UserProfile } from "../../app/models/user-profile";
import { Camera, CameraOptions } from "@ionic-native/camera";

import { USER_PROFILE } from "../../util/constants";

@Component({
  selector: "profile-edit-page",
  templateUrl: "profileedit.html"
})
export class ProfileEditPage {
  private userProf: UserProfile;
  private resultFromCamera: boolean;

  options: CameraOptions = {
    quality: 75,
    targetWidth: 100,
    targetHeight: 100,
    sourceType: this.camera.PictureSourceType.CAMERA,
    destinationType: this.camera.DestinationType.FILE_URI,
    encodingType: this.camera.EncodingType.JPEG,
    mediaType: this.camera.MediaType.PICTURE,
    correctOrientation: true
  };

  constructor(
    private navCtrl: NavController,
    private storage: Storage,
    private camera: Camera
  ) {
    this.userProf = new UserProfile();
    this.resultFromCamera = false;
    this.gatherUser();
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

  saveProfile() {
    this.resultFromCamera = true;
    console.log(this.userProf);
    this.storage.set(USER_PROFILE, this.userProf);
    console.log(this.resultFromCamera);
    //if (this.resultFromCamera)
    this.navCtrl.pop();
  }

  openCamera() {
    this.camera.getPicture(this.options).then(
      imageData => {
        console.log(imageData);
        this.userProf.picture_url = imageData;
        //this.profile_picture = "data:image/jpeg;base64," + imageData;
        console.log(this.resultFromCamera);
        if (!this.resultFromCamera) this.resultFromCamera = true;
        console.log(this.resultFromCamera);
      },
      err => {
        console.log(err);
      }
    );
  }
}
