import { EventRepository } from 'src/app/infrastructure/contracts/eventRepository';
import { BehaviorSubject, Observable, of } from 'rxjs';
import { FilterManager } from 'src/app/core/filterManager/filter-manager';

export class BookService {
    books:BehaviorSubject<any> = new BehaviorSubject(null);

    constructor(public eventRepository:EventRepository, public filter:FilterManager){ }  
    
    public find(title):Observable<any>{
        return of(this.filter.find(this.books.value,title));
    }
    


}