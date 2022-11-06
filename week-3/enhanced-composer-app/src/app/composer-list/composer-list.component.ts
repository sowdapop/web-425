// Title: Exercise 3.2 - Passing Data to Routes pt. 1
// Author: Professor Krasso
// Date: 6 Nov 2022
// Modified By: Kayla McDanel
// Description: Enhanced Composer App
// Code Attribution: Code and instruction provided by Professor Krasso's videos and assignment docs.

import { Component, OnInit } from '@angular/core';
import { IComposer } from '../composer.interface';
import { Composer } from '../composer.class';

@Component({
  selector: 'app-composer-list',
  templateUrl: './composer-list.component.html',
  styleUrls: ['./composer-list.component.css']
})
export class ComposerListComponent implements OnInit {

//Local component variable
  composers: Array<IComposer>;

//New instance of composer class
  constructor() {
    this.composers = new Composer().getComposers();
  }

  ngOnInit(): void {
  }

}
