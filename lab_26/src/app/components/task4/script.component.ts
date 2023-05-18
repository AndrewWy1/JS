import { Component } from "@angular/core";

@Component({
    selector: "fourthTask",
    templateUrl: "./index.component.html"

})
export class task4Component {
    numbers = [4, 2, 1, 3, 5];

    sortList() {
      this.numbers.sort();
    }
}