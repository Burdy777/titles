import { EventRepository } from '../contracts/eventRepository';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { TitleInterface } from 'src/app/domain/model/title.interface';

export class EventHttpProxy implements EventRepository {
    API_TITLE:string = 'assets/api/title.basics.json'
    constructor(public http:HttpClient) {}


    getFilms(): Observable<Array<TitleInterface>> {
        return this.http.get<any>(this.API_TITLE);
    }
    
}