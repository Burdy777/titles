import { NgModule } from '@angular/core';
import { BooksComponent } from './books.component';
import { BookService } from '../../domain/service/books.services';
import { RouterModule } from '@angular/router';
import { booksRoutes } from './book-routing'
import { HttpClient } from '@angular/common/http';
import { EventHttpProxy } from 'src/app/infrastructure/http-proxy/event-http-proxy';
import { EventRepository } from 'src/app/infrastructure/contracts/eventRepository';

import { ReactiveFormsModule } from '@angular/forms';
import { RxReactiveFormsModule } from "@rxweb/reactive-form-validators"

import { CommonModule } from '@angular/common';
import { MaterialComponents } from './material-component';
import { DialogCommonComponent } from 'src/app/shared/component/dialog-common/dialog-common.component';
import { FilterManager } from 'src/app/core/filterManager/filter-manager';
import { BooksResolver } from 'src/app/shared/resolver/books-resolver';

export function getEventRepository(http:HttpClient) {
  return new EventHttpProxy(http);
};

export function getBookService(eventRepository:EventRepository, filtre:FilterManager){
  return new BookService(eventRepository, filtre);
};

@NgModule({
  declarations: [
    BooksComponent,
    DialogCommonComponent
    
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    RxReactiveFormsModule,
    ...MaterialComponents,
    RouterModule.forChild(booksRoutes)
  ],
  providers: [
    {provide:'EventRepository', useFactory: getEventRepository, deps:[HttpClient]},
    {provide:'BookService', useFactory: getBookService, deps:['EventRepository', FilterManager]},
    BooksResolver
  ],
  entryComponents: [DialogCommonComponent]
})
export class BooksModule { }
