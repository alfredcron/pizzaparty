import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'tva'
})
export class TvaPipe implements PipeTransform {
  transform(value: any, ...args: any[]): any {

      console.log(value);
       let TTC = value*(1+args[0]/100)
        let TTC_format = TTC.toFixed(2).replace('.', ',') ;

      return TTC_format + ' €';
  }
}