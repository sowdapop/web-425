// Title: Assignment 3.4 - Guarding Routes
// Author: Professor Krasso
// Date: 6 Nov 2022
// Modified By: Kayla McDanel
// Description: Profile App
// Code Attribution: Code and instruction provided by Professor Krasso's videos and assignment docs.

import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';


@Injectable({
  providedIn: 'root'
})

export class SignInGuard implements CanActivate {
  //Added constructor and router to guard
  constructor(private router: Router){

  }
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
      let isLoggedIn = route.queryParams['isLoggedIn'];

      if (isLoggedIn) {
        return true;
      } else { //Sends user to sign-in form if not authenticated
        this.router.navigate(['/'])
        return false;
      }

  }

}
