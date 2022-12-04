  // Title: Exercise 7.2 - Reactive Forms
  // Author: Professor Krasso
  // Date: 3 Dec 2022
  // Modified By: Kayla McDanel
  // Description: GPA Calculator App
  // Code Attribution: Code and instruction provided by Professor Krasso's videos and assignment docs.

import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'app-base-layout',
  templateUrl: './base-layout.component.html',
  styleUrls: ['./base-layout.component.css']
})
export class BaseLayoutComponent implements OnInit {

  assignment: string;

  constructor(private cookieService: CookieService, private router: Router) {
    this.assignment = "Exercise 7.2 - Reactive Forms"
   }

  ngOnInit(): void {
  }

  //deletes cookies on sign out
  signOut() {
    this.cookieService.deleteAll();
    this.router.navigate(['/session/sign-in']);
  }

}
