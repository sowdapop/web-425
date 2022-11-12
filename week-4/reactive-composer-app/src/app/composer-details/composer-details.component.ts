// Title: Exercise 4.2 - Passing Data to Routes pt. 1
// Author: Professor Krasso
// Date: 12 Nov 2022
// Modified By: Kayla McDanel
// Description: DI Composer App
// Code Attribution: Code and instruction provided by Professor Krasso's videos and assignment docs.

import { Component, OnInit } from '@angular/core';
import { IComposer } from '../composer.interface';
import { ComposerService } from '../composer.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-composer-details',
  templateUrl: './composer-details.component.html',
  styleUrls: ['./composer-details.component.css']
})
export class ComposerDetailsComponent implements OnInit {

  composerId:number;
  composer!: IComposer;

  constructor(private route: ActivatedRoute, private composerService: ComposerService) {
    this.composerId = parseInt(this.route.snapshot.paramMap.get('composerId')!, 10);

// Function that checks if composerID has a value
    if (this.composerId) {
      this.composer = this.composerService.getComposer(this.composerId)!;
    }
  }

  ngOnInit(): void {
  }

}
