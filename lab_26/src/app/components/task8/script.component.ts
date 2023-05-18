import { Component } from "@angular/core";

@Component({
    selector: "eighthTask",
    templateUrl: "./index.component.html"

})
export class task8Component {
    countries = {
        Україна: ['Київ', 'Львів'],
        Польща: ['Варшава', 'Лодзь'],
        Великобританія: ['Лондон', 'Манчестер'],
    };
}