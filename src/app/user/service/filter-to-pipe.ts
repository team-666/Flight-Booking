import { Pipe, PipeTransform } from '@angular/core';

@Pipe({name: 'searchFilterTo'})
export class SearchFilterToPipe implements PipeTransform {
    transform(value: any, search: string): any {
        if(search!=""){
         if  (!search ) {return value; }
         let solution = value.filter(v => {
            if ( !v ) {return;}
           return  v.toLowerCase().indexOf(search.toLowerCase()) !== -1;
        })
        return solution;
    }
    }
}