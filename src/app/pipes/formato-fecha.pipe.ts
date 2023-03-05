import { Pipe, PipeTransform } from '@angular/core';
import { format } from 'date-fns';

@Pipe({
  name: 'formatoFecha'
})
export class FormatoFechaPipe implements PipeTransform {
  transform(value: string | undefined): string {
    if (value) {
      const date = new Date(value);
      // código para formatear la fecha
      return date.toString();
    } else {
      return ''; // o un valor predeterminado para manejar el caso de fecha undefined
    }
  }
}
