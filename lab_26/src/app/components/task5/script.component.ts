import { Component } from "@angular/core";

@Component({
  selector: "fifthTask",
  templateUrl: "./index.component.html"

})
export class task5Component {
  languages = ['html', 'css', 'js', 'php'];
  currentToggleIndex = 0;

  toggleNextLanguage() {
    this.currentToggleIndex = (this.currentToggleIndex + 1) % this.languages.length;
  }
}