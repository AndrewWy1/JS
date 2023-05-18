import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { task1Component } from "./components/task1/script.component";
import { task2Component } from "./components/task2/script.component";
import { task3Component } from "./components/task3/script.component";
import { task4Component } from "./components/task4/script.component";
import { task5Component } from "./components/task5/script.component";
import { task6Component } from "./components/task6/script.component";
import { task7Component } from "./components/task7/script.component";
import { task8Component } from "./components/task8/script.component";


@NgModule({
  declarations: [
    AppComponent,
    task1Component,
    task2Component,
    task3Component,
    task4Component,
    task5Component,
    task6Component,
    task7Component,
    task8Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
