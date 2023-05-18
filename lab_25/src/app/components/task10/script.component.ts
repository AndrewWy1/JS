import { Component } from "@angular/core";

@Component({
    selector: "tenthTask",
    templateUrl: "./index.component.html"

})
export class task10Component {
    languages = ['html', 'css', 'js', 'php'];

    removeLanguage() {
        const index = this.languages.indexOf('php');
        if (index !== -1) {
            this.languages.splice(index, 1);
        }
    }
}