import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'duration'
})
export class DurationPipe implements PipeTransform {

  transform(duration: string, args?: any): string {
    const value = Number(duration);

    if (value > 0) {
      const minFormat = Math.floor(value / 60) < 10 ? '0' + Math.floor(value / 60) : Math.floor(value / 60);
      const secFormat = Math.floor(value % 60) < 10 ? '0' + Math.floor(value % 60) : Math.floor(value % 60);
      return `${minFormat}:${secFormat}`;
    } else {
      return '00:00';
    }
  }

}
