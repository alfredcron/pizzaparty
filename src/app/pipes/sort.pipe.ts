import { Pipe, PipeTransform } from '@angular/core';
import { CompileMetadataResolver } from '@angular/compiler';
import * as _ from 'lodash';

@Pipe({
  name: 'sort'
})
export class SortPipe implements PipeTransform {
  transform(value: any, ...args: any[]): any {
    // Vérifier que value soit bien un tableau
    if (!Array.isArray(value)) {
        return value;    
    }
    //console.log(value);


    // Premier argument : name ou price
    // Second argument : asc ou desc
     
    //console.log(args);
    let field = args[0] || 'name'; 
    let order = args[1] || 'asc';

     // Faire le tri sur les objets du tableau
     //value.sort(args[0])
    //let prices = [{price: 19}, {price: 15}, {price: 5}, {price: 59}];

    let valuesorted = value.sort((a,b) => {
      let compare = 'asc' === order ? a[field] > b[field] : a[field] < b[field];
      return compare ? 1 : -1;
    });

    // ou sortBy, voir doc sur lodash
    let valuesortedlodash = _.sortBy(value, [field]);
    if ('desc' === order) valuesortedlodash.reverse();

    //console.log(valuesorted);
    //console.log(valuesortedlodash);

    return valuesorted;

  }
}
