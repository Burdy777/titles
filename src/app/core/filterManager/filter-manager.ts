import { FilterInterface } from'./filter-manager.interface' 
import { Injectable } from '@angular/core';
import { element } from 'protractor';
import { FilmInterface } from 'src/app/domain/model/title.interface';

@Injectable() 
export class FilterManager implements FilterInterface {
constructor(){}
    /**
    * 
    * filter either on the title or the year and title
    */
filter(list:any[], value:any): Array<FilmInterface>{
if(!value.dateBegin) {
    const listFilter = list.filter(element => (
        element.primaryTitle.toLowerCase().trim().indexOf(value.title.toLowerCase().trim()) !== -1 ||
        element.originalTitle.toLowerCase().trim().indexOf(value.title.toLowerCase().trim()) !== -1 ));
    return listFilter;
    } else {
        const listFilter = list.filter(element => (
        element.primaryTitle.toLowerCase().trim().indexOf(value.title.toLowerCase().trim()) !== -1 ||
        element.originalTitle.toLowerCase().trim().indexOf(value.title.toLowerCase().trim()) !== -1) 
        && +value.dateBegin <= +element.startYear);
       return listFilter;
    } 
}
}
