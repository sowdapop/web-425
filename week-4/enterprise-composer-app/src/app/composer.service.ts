// Title: Exercise 4.4 - Asynch Pipe
// Author: Professor Krasso
// Date: 12 Nov 2022
// Modified By: Kayla McDanel
// Description: Enterprise Composer App
// Code Attribution: Code and instruction provided by Professor Krasso's videos and assignment docs.

import { Injectable } from '@angular/core';
import { IComposer } from './composer.interface';
import { Observable } from 'rxjs';
import { of } from 'rxjs';
import { map } from 'rxjs';

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
  getComposers(): Observable<IComposer[]> {
    return of(this.composers);
  }


//Function to loop over composer array and return composerId
  getComposer(composerId: number) {
    for (let composer of this.composers) {
      if (composer.composerId === composerId) {
        return composer;
      }
    } return
  }

//Function to return a new array of composer objects using map(), linked together using pipe(), filtered with filter()
  filterComposers(name: string): Observable<IComposer[]> {
    return of(this.composers).pipe(map(composers => composers.filter(composer => composer.fullName.toLowerCase().indexOf(name)> -1)));
  }

}
