import { Component } from "@angular/core";

@Component({
  selector: "sixthTask",
  templateUrl: "./index.component.html"

})
export class task6Component {
  users = ['Микола', 'Василь', 'Петро'];
  additionalUsers = ['Аня', 'Валя', 'Маша'];
  currentIndex = 0;

  addUser() {
    if (this.currentIndex < this.additionalUsers.length) {
      this.users.push(this.additionalUsers[this.currentIndex]);
      this.currentIndex++;
    } else {
      this.users.sort();
    }
  }
}