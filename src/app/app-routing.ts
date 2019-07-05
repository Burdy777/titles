import { Routes } from '@angular/router';
import { PageNotFoundComponent } from './shared/component/page-not-found/page-not-found.component';

export const appRoutes:Routes =  [
  { path: '', loadChildren: () => import('./components/films/films.module').then(mod => mod.FilmsModule) },  
  { path: '', redirectTo: '', pathMatch: 'full'},
  { path: '**', component: PageNotFoundComponent }
]