import { Component } from "@angular/core";

@Component({
    selector: "thirdTask",
    templateUrl: "./index.component.html"

})
export class task3Component {
    numbers = [1, 2, 3, 4, 5];

    reverseList() {
        this.numbers.reverse();
    }
}