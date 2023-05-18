import { Component } from "@angular/core";

@Component({
    selector: "thirdTask",
    templateUrl: "./index.component.html"

})
export class task3Component {
    country = {
        Варшава: 'Польща',
        Вільнюс: 'Литва',
        Київ: 'Україна',
    };
}