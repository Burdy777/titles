import { FilmInterface } from 'src/app/domain/model/title.interface';

export interface FilterInterface {
    filter(list:any[], title:string): Array<FilmInterface>;
}