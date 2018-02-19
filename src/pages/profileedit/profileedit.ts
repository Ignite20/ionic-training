import { Component } from "@angular/core";
import { NavController } from "ionic-angular";
import { Storage } from "@ionic/storage";
import { UserProfile } from "../../app/models/user-profile";
import { Camera, CameraOptions } from "@ionic-native/camera";
import {
  CameraPreview,
  CameraPreviewOptions
} from "@ionic-native/camera-preview";
import { USER_PROFILE } from "../../util/constants";

@Component({
  selector: "profile-edit-page",
  templateUrl: "profileedit.html"
})
export class ProfileEditPage {
  private userProf: UserProfile;

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

  previewOptions: CameraPreviewOptions = {
    x: 0,
    y: 0,
    width: 100,
    height: 100,
    camera: "rear",
    tapPhoto: true,
    previewDrag: true,
    toBack: false,
    alpha: 1
  };

  constructor(
    private navCtrl: NavController,
    private storage: Storage,
    private camera: Camera,
    private cameraPreview: CameraPreview
  ) {
    this.userProf = new UserProfile();
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

  openCamera() {
    /*
	this.cameraPreview
      .startCamera(this.previewOptions)
      .then(data => {
        console.log(data);
      })
      .catch(err => {
        console.log(err);
      });
    */
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

  saveProfile() {
    console.log(this.userProf);
    this.storage.set(USER_PROFILE, this.userProf);
    this.navCtrl.pop();
  }
}
