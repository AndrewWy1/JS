import { Component } from "@angular/core";

@Component({
  selector: "seventhTask",
  templateUrl: "./index.component.html"

})
export class task7Component {
  languages = ['html', 'css', 'js', 'php'];

  changeLanguage() {
    const index = this.languages.indexOf('php');
    if (index !== -1) {
      this.languages[index] = 'sql';
    }
  }
}