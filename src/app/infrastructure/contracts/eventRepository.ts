import { Observable } from 'rxjs';
import { TitleInterface } from 'src/app/domain/model/title.interface';

export interface EventRepository {
    getFilms(): Observable<Array<TitleInterface>>;
}
