import { EventRepository } from 'src/app/infrastructure/contracts/eventRepository';
import { BehaviorSubject, Observable, of } from 'rxjs';
import { FilterManager } from 'src/app/core/filterManager/filter-manager';
import { FilmInterface } from '../model/title.interface';

export class FilmsService {
    public films:BehaviorSubject<any> = new BehaviorSubject(null);

    constructor(public eventRepository:EventRepository, public filterManager:FilterManager){ }  
    
    public find(title):Observable<Array<FilmInterface>>{
        return of(this.filterManager.filter(this.films.value,title));
    }
    


}