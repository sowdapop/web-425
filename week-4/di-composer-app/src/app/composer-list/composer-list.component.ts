// Title: Exercise 4.2 - Passing Data to Routes pt. 1
// Author: Professor Krasso
// Date: 12 Nov 2022
// Modified By: Kayla McDanel
// Description: DI Composer App
// Code Attribution: Code and instruction provided by Professor Krasso's videos and assignment docs.

import { Component, OnInit } from '@angular/core';
import { IComposer } from '../composer.interface';
import { ComposerService } from '../composer.service';

@Component({
  selector: 'app-composer-list',
  templateUrl: './composer-list.component.html',
  styleUrls: ['./composer-list.component.css']
})
export class ComposerListComponent implements OnInit {

//Local component variable
  composers: Array<IComposer>;

//New instance of composer service via dependency injection
  constructor(private composerService: ComposerService) {
    this.composers = this.composerService.getComposers();
  }

  ngOnInit(): void {
  }

}
