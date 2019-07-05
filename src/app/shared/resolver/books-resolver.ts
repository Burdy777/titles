import { Injectable, Inject } from '@angular/core';
import { EventRepository } from 'src/app/infrastructure/contracts/eventRepository';
import { BookService } from 'src/app/domain/service/books.services';

Injectable({
    providedIn:'root'
})
export class BooksResolver {

  constructor(@Inject('EventRepository') private eventRepository:EventRepository, @Inject('BookService') private bookService:BookService) { }

  resolve() {
  return this.fetchBooks()
}

public async fetchBooks() {
          this.eventRepository.getBooks().subscribe(books => this.bookService.books.next(books))
    }

}