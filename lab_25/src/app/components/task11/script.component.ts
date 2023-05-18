import { Component } from "@angular/core";

@Component({
    selector: "eleventhTask",
    templateUrl: "./index.component.html"

})
export class task11Component {
    languages = ['html', 'css', 'js', 'php'];

    removeLanguage() {
        const index = this.languages.indexOf('html');
        if (index !== -1) {
            this.languages.splice(index, 1);
        }
    }
}