import { FilterInterface } from'./filter-manager.interface' 
import { Injectable } from '@angular/core';
import { element } from 'protractor';

@Injectable() 
export class FilterManager implements FilterInterface {

    constructor(){}

    find(list:any[], value:any){
        if(!value.dateBegin) {
        const listFilter = list.filter(element => (
            element.primaryTitle.toLowerCase().trim().includes(value.title.toLowerCase().trim()) 
            || element.originalTitle.toLowerCase().trim().includes(value.title.toLowerCase().trim()))
            );
       return listFilter;
    } else {
        const listFilter = list.filter(element => (
            element.primaryTitle.toLowerCase().trim().includes(value.title.toLowerCase().trim()) 
            || element.originalTitle.toLowerCase().trim().includes(value.title.toLowerCase().trim())) && +value.dateBegin <= +element.startYear);
       return listFilter;
    }
       
    }
}