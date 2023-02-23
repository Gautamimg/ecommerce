import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'custompipes'
})
export class CustompipesPipe implements PipeTransform {

  transform(value: number, exponent: number): number {
    return Math.pow(value,exponent);
  }

}
