import { Pipe, PipeTransform } from '@angular/core';
import { Product } from '../interface';

@Pipe({
  name: 'searc',
  pure: false,
})
export class SearcPipe implements PipeTransform {
  transform(value: Product[], name: string): Product[] {
    if (value.length == 0 || name == '') {
      return value;
    }
    const filtered: Product[] = [];
    for (let item of value) {
      if (
        item.name.toLocaleLowerCase().indexOf(name.toLocaleLowerCase()) !== -1
      ) {
        filtered.push(item);
      }
    }
    return filtered;
  }
}
