  // Title: Assignment 5.4 - Dialogs
  // Author: Professor Krasso
  // Date: 20 Nov 2022
  // Modified By: Kayla McDanel
  // Description: In-N-Out Books App
  // Code Attribution: Code and instruction provided by Professor Krasso's videos and assignment docs.


import { Component } from "@angular/core";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

//provides a variable to use globally for the assignment title.
assignment: string;

constructor() {
  this.assignment = 'Assignment 5.4 - Dialogs'
}
}
