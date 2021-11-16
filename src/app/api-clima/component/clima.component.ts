import { Component, ViewChild, ElementRef } from '@angular/core';
import { Clima } from 'src/app/interface/interface.interface';

import { ApiClimaService } from '../service/api-clima.service';


@Component({
  selector: 'app-clima',
  templateUrl: './clima.component.html',
  styles: [
  ]
})
export class ClimaComponent {
 
  ciudad: string = '';
  pais: string = '';
  sensacion: string = '';
  humedad: string = '';
  presion: string = '';
  temperatura: string = '';
  tempMax: string = '';
  tempMin: string = '';
  descripcion: string = '';
  viento: string = '';
  celsiusTem: number = 0;
  celsiusSens: number = 0;
  celsiusMax: number = 0;
  celsiusMin: number = 0;

    @ViewChild('texto') buscar! : ElementRef<HTMLInputElement>

  constructor(private service: ApiClimaService) { }

  getDatos(){
    const value = this.buscar.nativeElement.value
  
    this.service.getdatos( value ).subscribe((datos: Clima) => {
      console.log(datos)

      this.celsiusSens = (datos.main.feels_like) - (273.15);
      this.celsiusTem = (datos.main.temp) - (273.15);
      this.celsiusMax = (datos.main.temp_max) - (273.15);
      this.celsiusMin = (datos.main.temp_min) - (273.15);

      this.ciudad = datos.name;
      this.pais = datos.sys.country;
      this.sensacion = this.celsiusSens.toString();
      this.humedad = datos.main.humidity.toString();
      this.presion = datos.main.pressure.toString();
      this.tempMax = this.celsiusMax.toString();
      this.tempMin = this.celsiusMin.toString();
      this.temperatura = this.celsiusTem.toString();
      this.descripcion = datos.weather[0].description;
      this.viento = datos.wind.speed.toString();

    })
  }

}
