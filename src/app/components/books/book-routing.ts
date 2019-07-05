import { Routes } from '@angular/router';
import { BooksComponent } from './books.component';
import { BooksResolver } from 'src/app/shared/resolver/books-resolver';

export const booksRoutes:Routes = [
    {path:'', children: [
        {path:'', component: BooksComponent , resolve:{books:BooksResolver}}
    ]}
]