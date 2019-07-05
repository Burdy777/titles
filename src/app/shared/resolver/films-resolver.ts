import { Injectable, Inject } from '@angular/core';
import { EventRepository } from 'src/app/infrastructure/contracts/eventRepository';
import { FilmsService } from 'src/app/domain/services/films.services';

Injectable({
    providedIn:'root'
})
export class FilmResolver {

constructor(@Inject('EventRepository') private eventRepository:EventRepository, @Inject('FilmsService') private filmService:FilmsService) { }

public resolve() {
  return this.fetchFilms()
}

public fetchFilms() {
        this.eventRepository.getFilms().subscribe(films => this.filmService.films.next(films))
    }

}