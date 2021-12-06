import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'presion'
})
export class PresionPipe implements PipeTransform {

  transform(value: number, cambio: string): number {
    
    switch (cambio) {
      case 'pa':
        return (value);
        break;
      case 'bar':
        return (value + 'b') ? (value) / (100000) : value ;
        break;
      case 'torr':
        return (value) ? (value) / (133) : value ;
        break;
      case 'atm':
        return (value) ? (value) / (101325) : value ;
        break;
      default:
        return value;
        break;
    }

  }

}
