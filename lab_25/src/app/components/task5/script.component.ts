import { Component } from "@angular/core";

@Component({
  selector: "fifthTask",
  templateUrl: "./index.component.html"

})
export class task5Component {
  name = 'Іван';

  changeName() {
    this.name = 'Дмитро';
  }
}