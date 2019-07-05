import { Routes } from '@angular/router';
import { PageNotFoundComponent } from './shared/component/page-not-found/page-not-found.component';

export const appRoutes:Routes =  [
  { path: '', loadChildren: () => import('./components/books/books.module').then(mod => mod.BooksModule) },  
  { path: '', redirectTo: '', pathMatch: 'full'},
  { path: '**', component: PageNotFoundComponent }
]