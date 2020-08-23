import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter',
  pure: false
})
export class FilterPipe implements PipeTransform {
  transform(value: any, filterString: string): any {
    const filterRegex = new RegExp(`${filterString}`, 'i');

    if (value.length === 0 || filterString === '' ? value : value) { }
    const resultArray = [];

    for (const item of value) {
      if (item.nome.match(filterRegex) ? resultArray.push(item) : [-1]) { }
    }

    return resultArray.length > 0 ? resultArray : [-1];
  }
}
