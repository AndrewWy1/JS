import { Component } from "@angular/core";

@Component({
    selector: "eighthTask",
    templateUrl: "./index.component.html"

})
export class task8Component {
    languages = ['html', 'css', 'js', 'php'];

    addLanguage() {
        this.languages.push('sql');
    }
}