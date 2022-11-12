// Title: Exercise 4.2 - Passing Data to Routes pt. 1
// Author: Professor Krasso
// Date: 12 Nov 2022
// Modified By: Kayla McDanel
// Description: DI Composer App
// Code Attribution: Code and instruction provided by Professor Krasso's videos and assignment docs.

import { Component, OnInit } from '@angular/core';
import { IComposer } from '../composer.interface';
import { ComposerService } from '../composer.service';
import { FormControl } from "@angular/forms";
import { debounce, debounceTime } from 'rxjs';

@Component({
  selector: 'app-composer-list',
  templateUrl: './composer-list.component.html',
  styleUrls: ['./composer-list.component.css']
})
export class ComposerListComponent implements OnInit {

//Local component variable
  composers: Array<IComposer>;
  txtSearchControl = new FormControl('');

//New instance of composer service via dependency injection
  constructor(private composerService: ComposerService) {
    this.composers = this.composerService.getComposers();

    this.txtSearchControl.valueChanges.pipe(debounceTime(500)).subscribe(val => this.filterComposers(val!));
  }

  ngOnInit(): void {
  }

//Function handles the value change in form control
  filterComposers(name: string) {
    alert(name);
  }

}
