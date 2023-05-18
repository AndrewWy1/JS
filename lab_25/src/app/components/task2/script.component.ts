import { Component } from "@angular/core";

@Component({
    selector: "secondTask",
    templateUrl: "./index.component.html"

})
export class task2Component {
    user = {
        name: 'Петро',
        surname: 'Петренко',
        age: '25',
    };
}