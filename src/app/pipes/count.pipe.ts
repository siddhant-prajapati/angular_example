import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'count',
  standalone: true
})
export class CountPipe implements PipeTransform {

  transform(value: any, ...args: unknown[]): unknown {
    let result: any[] = value
    result = value.map((str : any) => str.length)
    return result;
  }

}
