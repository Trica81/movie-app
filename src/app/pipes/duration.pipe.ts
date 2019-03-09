import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'duration'
})
export class DurationPipe implements PipeTransform {

  transform(value: any, args?: any): any {
    if (value > 0 && value !== '') {
      const minFormat = Math.floor(value / 60) < 10 ? '0' + Math.floor(value / 60) : Math.floor(value / 60);
      const secFormat = Math.floor(value % 60) < 10 ? '0' + Math.floor(value % 60) : Math.floor(value % 60);
      return `${minFormat}:${secFormat}`;
    } else {
      return '00:00';
    }
  }

}
