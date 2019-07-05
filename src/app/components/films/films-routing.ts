import { Routes } from '@angular/router';
import { FilmsComponent } from './films.component';
import { FilmResolver } from 'src/app/shared/resolver/films-resolver';

export const filmsRoutes:Routes = [
    {path:'', children: [
        {path:'', component: FilmsComponent , resolve:{film:FilmResolver}}
    ]}
]