import { Component, OnInit } from '@angular/core';
import { Book } from '../book';
import { BookService } from '../book.service';

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.css'],
})
export class BookComponent implements OnInit {
  books: Array<Book> = [];
  constructor(public bookService: BookService) {}

  ngOnInit(): void {
    this.getAllBooksDetails();
  }

  getAllBooksDetails(): void {
    this.bookService.loadBookDetails().subscribe(
      (result) => (this.books = result),
      (error) => console.log(error),
      () => console.log('done')
    );
  }
}
