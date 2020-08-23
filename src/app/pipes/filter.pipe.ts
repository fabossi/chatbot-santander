import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter',
  pure: false
})
export class FilterPipe implements PipeTransform {
  transform(value: any, filterString: string): any {
    const filterRegex = new RegExp(`${filterString}`, 'i');

    if (value.length === 0 || filterString === '') {
      return value;
    }
    const resultArray = [];

    for (const item of value) {
      item.title.match(filterRegex) ? resultArray.push(item) : resultArray.push(-1);
    }

    return resultArray.length > 0 ? resultArray : resultArray.push(-1);
  }
}
