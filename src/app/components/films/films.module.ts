import { NgModule } from '@angular/core';
import { FilmsComponent } from './films.component';
import { RouterModule } from '@angular/router';
import { filmsRoutes } from './films-routing'
import { HttpClient } from '@angular/common/http';
import { EventHttpProxy } from 'src/app/infrastructure/http-proxy/event-http-proxy';
import { EventRepository } from 'src/app/infrastructure/contracts/eventRepository';

import { ReactiveFormsModule } from '@angular/forms';
import { RxReactiveFormsModule } from "@rxweb/reactive-form-validators"

import { CommonModule } from '@angular/common';
import { MaterialModule } from './material';
import { DialogCommonComponent } from 'src/app/shared/component/dialog-common/dialog-common.component';
import { FilterManager } from 'src/app/core/filterManager/filter-manager';
import { FilmResolver } from 'src/app/shared/resolver/films-resolver';
import { FilmsService } from 'src/app/domain/services/films.services';

export function getEventRepository(http:HttpClient) {
  return new EventHttpProxy(http);
};

export function getFilmService(eventRepository:EventRepository, filtre:FilterManager){
  return new FilmsService(eventRepository, filtre);
};

@NgModule({
  declarations: [
    FilmsComponent,
    DialogCommonComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    RxReactiveFormsModule,
    ...MaterialModule,
    RouterModule.forChild(filmsRoutes)
  ],
  providers: [
    {provide:'EventRepository', useFactory: getEventRepository, deps:[HttpClient]},
    {provide:'FilmsService', useFactory: getFilmService, deps:['EventRepository', FilterManager]},
    FilmResolver
  ],
  entryComponents: [DialogCommonComponent]
})
export class FilmsModule { }
