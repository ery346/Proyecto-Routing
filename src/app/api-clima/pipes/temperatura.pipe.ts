import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'temperatura'
})
export class TemperaturaPipe implements PipeTransform {

  transform(value: number, cambiar: string): number {

    switch (cambiar) {
      case 'ce':
        return (value) ? value - (273.15): value;
        break;
      case 'fa':
        return (value) ? (value - 273.15) * 9/5 + 32: value; 
        break;
      case 'ke':
        return value;
        break;
    
      default:
        return value;
        break;
    }

  }

}
