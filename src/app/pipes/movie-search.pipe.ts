import { Pipe, PipeTransform } from '@angular/core';
import { arch } from 'os';

@Pipe({
  name: 'movieSearch'
})
export class MovieSearchPipe implements PipeTransform {

  transform(value: any, term: any, property: any): any {
    const termToSerach = term;
    const propertyForSearch = property;

    if (termToSerach === '') {
      return value;
    } else {
      const resault = value.filter(item => {
        const valueToSearch = item[propertyForSearch].toLowerCase();
        const termForSerach = termToSerach.toLowerCase();
        if (valueToSearch.search(termForSerach) > -1) {
          return item;
        }
      });
      return resault;

    }
  }

}
