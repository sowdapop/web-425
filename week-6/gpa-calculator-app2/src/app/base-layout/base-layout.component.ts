  // Title: Assignment 6.4 - Input Properties
  // Author: Professor Krasso
  // Date: 27 Nov 2022
  // Modified By: Kayla McDanel
  // Description: GPA Calculator App
  // Code Attribution: Code and instruction provided by Professor Krasso's videos and assignment docs.

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-base-layout',
  templateUrl: './base-layout.component.html',
  styleUrls: ['./base-layout.component.css']
})
export class BaseLayoutComponent implements OnInit {

  assignment: string;

  constructor() {
    this.assignment = "Assignment 6.4 - Input Properties"
   }

  ngOnInit(): void {
  }

}
