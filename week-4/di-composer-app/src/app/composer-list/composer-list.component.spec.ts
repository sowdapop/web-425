// Title: Exercise 3.2 - Passing Data to Routes pt. 1
// Author: Professor Krasso
// Date: 6 Nov 2022
// Modified By: Kayla McDanel
// Description: Enhanced Composer App
// Code Attribution: Code and instruction provided by Professor Krasso's videos and assignment docs.

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComposerListComponent } from './composer-list.component';

describe('ComposerListComponent', () => {
  let component: ComposerListComponent;
  let fixture: ComponentFixture<ComposerListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ComposerListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ComposerListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
