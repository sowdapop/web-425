// Title: Exercise 5.2 - Navigation and Layout
// Author: Professor Krasso
// Date: 19 Nov 2022
// Modified By: Kayla McDanel
// Description: In-N-Out Books App
// Code Attribution: Code and instruction provided by Professor Krasso's videos and assignment docs.

//importing components
import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { BookListComponent } from './book-list/book-list.component';
import { ContactComponent } from './contact/contact.component';

//adding paths to components
const routes: Routes = [
  {
    path: '',
    component: BookListComponent
  },
  {
    path: 'book-list',
    component: BookListComponent
  },
  {
    path: 'about',
    component: AboutComponent
  },
  {
    path: 'contact',
    component: ContactComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
