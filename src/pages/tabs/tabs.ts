import { Component } from "@angular/core";

// Pages to redirect
import { HomePage } from "../home/home";
import { ProfilePage } from "../profile/profile";
import { TodoListPage } from "../todolist/todolist";

@Component({
  templateUrl: "tabs.html"
})
export class TabsPage {
  tabHome: any = HomePage;
  tabProfile: any = ProfilePage;
  tabTodoList: any = TodoListPage;

  constructor() {}
}
