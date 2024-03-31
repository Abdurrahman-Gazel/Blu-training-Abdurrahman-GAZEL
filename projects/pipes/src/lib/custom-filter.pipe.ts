import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'customFilter',
  standalone: true,
})
export class CustomFilterPipe implements PipeTransform {
  transform(items: any[], searchText: string): any[] {
    if (!items) {
      return [];
    }
    if (!searchText) {
      return items;
    }
    searchText = searchText.toLowerCase();
    return items.filter((item) => {
      return item.firstName.toLowerCase().includes(searchText);
    });
  }
}
