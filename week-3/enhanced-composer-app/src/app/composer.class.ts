// Title: Exercise 3.2 - Passing Data to Routes pt. 1
// Author: Professor Krasso
// Date: 6 Nov 2022
// Modified By: Kayla McDanel
// Description: Enhanced Composer App
// Code Attribution: Code and instruction provided by Professor Krasso's videos and assignment docs.

import { IComposer } from "./composer.interface";


export class Composer {
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
