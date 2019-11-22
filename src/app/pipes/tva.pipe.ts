import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'tva'
})
export class TvaPipe implements PipeTransform {
  transform(value: any, ...args: any[]): any {

      //console.log(value);
       let TTC = value*(1+args[0]/100)
       //console.log(TTC); 
        let TTC_format = TTC.toFixed(2).replace('.', ',') ;
      //console.log(TTC_format);
      return TTC_format + ' €';
  }
}