import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(arr: any, searchValue: string): any {

    debugger;

    if(!searchValue) {
      return arr;
    }
    const result =  arr.filter(value => {
      debugger;
      return value.indexOf(searchValue.toLowerCase()) > -1;
    })

    return result;
  }

}
