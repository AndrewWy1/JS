import { Component } from "@angular/core";

@Component({
    selector: "ninethTask",
    templateUrl: "./index.component.html"

})
export class task9Component {
    languages = ['html', 'css', 'js', 'php'];

    addLanguage() {
        this.languages.unshift('sql');
    }
}