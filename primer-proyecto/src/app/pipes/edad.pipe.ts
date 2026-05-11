import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'edad',
  standalone: true
})
export class EdadPipe implements PipeTransform {
  hoy = new Date();
  transform(fecha: Date): number {
    return this.hoy.getFullYear() - fecha.getFullYear();
  }

}
