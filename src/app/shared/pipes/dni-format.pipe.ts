import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'dniFormat'
})
export class DniFormatPipe implements PipeTransform {

  transform(value: number, ...args: unknown[]): unknown {
    return value.toLocaleString('es-AR');
  }

}
