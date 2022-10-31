import { Component, OnInit } from '@angular/core';

//Composer class creation
export default class Composer {
  fullName: string;
  genre: string;

//Constructor parameters
constructor (fullName: string, genre: string) {
  this.fullName = fullName;
  this.genre = genre;
  }
}

@Component({
  selector: 'app-composer-list',
  templateUrl: './composer-list.component.html',
  styleUrls: ['./composer-list.component.css']
})
export class ComposerListComponent implements OnInit {
//Composers variable
composers: Array<Composer>;

  constructor() {
    this.composers = [
      new Composer('Duke Ellington', 'Jazz'),
      new Composer('Edward Elgar', 'Classical'),
      new Composer('Aaron Copland', 'Orchestral'),
      new Composer('Michael Legrand', 'Film'),
      new Composer('John Williams', 'Orchestral'),
    ]
  }

  ngOnInit(): void {
  }

}
