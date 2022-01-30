import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Book } from '../book';
import { BookService } from '../book.service';

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.css'],
})
export class BookComponent implements OnInit {
  books: Array<Book> = [];

  bookRef = new FormGroup({
    name: new FormControl(),
    author: new FormControl(),
    price: new FormControl(),
    imgSrc: new FormControl(),
  });
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

  storeBook() {
    let book = this.bookRef.value;
    this.bookService.storeBookDetails(book).subscribe(
      (result) => console.log(result),
      (error) => console.log(error),
      () => {
        this.getAllBooksDetails();
      }
    );
  }
}
