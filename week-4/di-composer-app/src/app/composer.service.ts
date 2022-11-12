// Title: Exercise 4.2 - Passing Data to Routes pt. 1
// Author: Professor Krasso
// Date: 12 Nov 2022
// Modified By: Kayla McDanel
// Description: DI Composer App
// Code Attribution: Code and instruction provided by Professor Krasso's videos and assignment docs.

import { Injectable } from '@angular/core';
import { IComposer } from './composer.interface';

@Injectable({
  providedIn: 'root'
})
export class ComposerService {

  composers: Array<IComposer>;

//Constructor parameters
constructor () {
  this.composers = [
    {
      composerId: 100, fullName: 'Duke Ellington', genre: 'Jazz'
    },
    {
      composerId: 101, fullName: 'Edward Elgar', genre: 'Classical'
    },
    {
      composerId: 102, fullName: 'Aaron Copland', genre: 'Orchestral'
    },
    {
      composerId: 103, fullName: 'Michael Legrand', genre: 'Film'
    },
    {
      composerId: 104, fullName: 'John Williams', genre: 'Orchestral'
    },
  ]
  }

  //Function to return composer objects
  getComposers() {
    return this.composers;
  }


//Function to loop over composer array and return composerId
  getComposer(composerId: number) {
    for (let composer of this.composers) {
      if (composer.composerId === composerId) {
        return composer;
      }
    } return
  }

}
