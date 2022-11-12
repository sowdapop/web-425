// Title: Exercise 3.2 - Passing Data to Routes pt. 1
// Author: Professor Krasso
// Date: 6 Nov 2022
// Modified By: Kayla McDanel
// Description: Enhanced Composer App
// Code Attribution: Code and instruction provided by Professor Krasso's videos and assignment docs.

import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  assignment: string = 'Exercise 4.2 - Inversion of Control & Dependency Injection';
}
