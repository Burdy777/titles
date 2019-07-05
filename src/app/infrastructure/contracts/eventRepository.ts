import { Observable } from 'rxjs';
import { FilmInterface } from 'src/app/domain/model/title.interface';

export interface EventRepository {
    getFilms(): Observable<Array<FilmInterface>>;
}
