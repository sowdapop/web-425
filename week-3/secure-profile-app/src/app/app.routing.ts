// Title: Exercise 3.3 - Passing Data to Routes, pt 2
// Author: Professor Krasso
// Date: 6 Nov 2022
// Modified By: Kayla McDanel
// Description: Profile App
// Code Attribution: Code and instruction provided by Professor Krasso's videos and assignment docs.

import { Routes } from '@angular/router';
import { SignInComponent } from './sign-in/sign-in.component';
import { HomeComponent } from './home/home.component';

export const AppRoutes: Routes= [
  {
    path: '',
    component: SignInComponent
  },
  {
    path:'home',
    component: HomeComponent
  }
]
