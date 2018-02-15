import { Component } from "@angular/core";
import { NavController, AlertController } from "ionic-angular";

@Component({
  selector: "todo-list-page",
  templateUrl: "todolist.html"
})
export class TodoListPage {
  constructor(nav: NavController, private alertCtrl: AlertController) {}
  items = [
    "Pokémon Yellow",
    "Super Metroid",
    "Mega Man X",
    "The Legend of Zelda",
    "Pac-Man",
    "Super Mario World",
    "Street Fighter II",
    "Half Life",
    "Final Fantasy VII",
    "Star Fox",
    "Tetris",
    "Donkey Kong III",
    "GoldenEye 007",
    "Doom",
    "Fallout",
    "GTA",
    "Halo"
  ];

  itemSelected(item: string) {
    this.displayAlert(item);
  }

  displayAlert(message: string) {
    let alert = this.alertCtrl.create({
      title: "Wow",
      subTitle: message,
      buttons: ["Dismiss"]
    });

    alert.present();
  }
}
