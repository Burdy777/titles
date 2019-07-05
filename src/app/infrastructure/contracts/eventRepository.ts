import { Observable } from 'rxjs';

export interface EventRepository {
    getBooks(): Observable<any>;
}
