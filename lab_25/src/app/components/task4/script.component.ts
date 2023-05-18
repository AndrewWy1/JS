import { Component } from "@angular/core";

@Component({
    selector: "fourthTask",
    templateUrl: "./index.component.html"

})
export class task4Component {
    workers = [
        { name: 'Микола', age: 30, salary: 400 },
        { name: 'Василь', age: 31, salary: 500 },
        { name: 'Петро', age: 32, salary: 600 },
    ];
}