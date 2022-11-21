// Title: Exercise 5.3 - Data Tables
// Author: Professor Krasso
// Date: 19 Nov 2022
// Modified By: Kayla McDanel
// Description: In-N-Out Books App
// Code Attribution: Code and instruction provided by Professor Krasso's videos and assignment docs.import { Component } from '@angular/core';

import { Component, OnInit } from '@angular/core';
import { IBook } from '../book.interface';
import { Observable } from 'rxjs';
import { BooksService } from '../books.service';

@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.css']
})
export class BookListComponent implements OnInit {

  //field properties for material data table
  books: Observable<IBook[]>;
  //header for table
  header: Array<string> = ['isbn', 'title', 'numOfPages', 'authors'];
  //maps to book object
  book!: IBook;

  //for entire book list
  constructor(private booksService: BooksService) {
    this.books = this.booksService.getBooks();
   }

  ngOnInit(): void {
  }

  //for individual book detail
  showBookDetails(isbn: string) {
    this.book = this.booksService.getBook(isbn);
    console.log(this.book);
  }

}
