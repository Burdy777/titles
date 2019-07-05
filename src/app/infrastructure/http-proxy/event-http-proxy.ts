import { EventRepository } from '../contracts/eventRepository';
import { Observable, of } from 'rxjs';
import { HttpClient } from '@angular/common/http';

export class EventHttpProxy implements EventRepository {
    constructor(public http:HttpClient) {}

    getBooks(): Observable<any> {
        return this.http.get<any>('assets/api/title.basics.json');
    }
    
}