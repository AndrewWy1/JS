import { Component } from "@angular/core";

@Component({
    selector: "firstTask",
    templateUrl: "./index.component.html"

})
export class task1Component {
    name: string = 'Петро';
    surname: string = 'Петренко';
    age: number = 25;
}