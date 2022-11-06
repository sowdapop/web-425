// Title: Exercise 3.2 - Passing Data to Routes pt. 1
// Author: Professor Krasso
// Date: 6 Nov 2022
// Modified By: Kayla McDanel
// Description: Enhanced Composer App
// Code Attribution: Code and instruction provided by Professor Krasso's videos and assignment docs.

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ComposerListComponent } from './composer-list/composer-list.component';
import { ContactComponent } from './contact/contact.component';
import { AboutComponent } from './about/about.component';
import { ComposerDetailsComponent } from './composer-details/composer-details.component';
import { RouterModule } from '@angular/router';


@NgModule({
  declarations: [
    AppComponent,
    ComposerListComponent,
    ContactComponent,
    AboutComponent,
    ComposerListComponent,
    ComposerDetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
