import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'sort'
})
export class SortPipe implements PipeTransform {
  transform(value: any, ...args: any[]): any {
    // Vérifier que value soit bien défini
    if (typeof value === 'undefined') {
        return value;
    }
    console.log(value);

    // Premier argument : name ou price
    // Second argument : asc ou desc
     
     console.log(args);

     // Faire le tri sur les objets du tableau
     //value.sort(args[0])
     return value;
  }
}