import { Component } from "@angular/core";

@Component({
  selector: "sixthTask",
  templateUrl: "./index.component.html"

})
export class task6Component {
  name = 'Іван';
  surname = 'Іванів';
  age = 25;

  changeName() {
    this.name = 'Петро';
  }

  changeSurname() {
    this.surname = 'Петренко';
  }

  changeAge() {
    this.age = 30;
  }
}