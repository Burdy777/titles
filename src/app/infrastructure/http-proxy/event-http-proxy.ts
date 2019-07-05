import { EventRepository } from '../contracts/eventRepository';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { FilmInterface } from 'src/app/domain/model/title.interface';

export class EventHttpProxy implements EventRepository {
    API_FILMS:string = 'assets/api/title.basics.json'
    constructor(public http:HttpClient) {}


    getFilms(): Observable<Array<FilmInterface>> {
        return this.http.get<any>(this.API_FILMS);
    }
    
}