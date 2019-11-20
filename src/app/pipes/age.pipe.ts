import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'age'
})
export class AgePipe implements PipeTransform {
  transform(value: any, ...args: any[]): any {
      console.log(value);
      let currentDate = (new Date()).getTime();
      let birthdate = (new Date((value)).getTime());
      let timeDiff = currentDate - birthdate;
      let age = (new Date(timeDiff)).getFullYear() - 1970;

      return age;
  }
}