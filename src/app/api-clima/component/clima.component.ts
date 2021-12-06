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
  sensacion: number = 0;
  humedad: string = '';
  presion: number = 0;
  temp: number = 0;
  tempMax: number = 0;
  tempMin: number = 0;
  descripcion: string = '';
  viento: string = '';

  idOcultar: string = 'divOculto';
  cambioTemp: string = '';
  cambioPresion: string = '';
  unidadT: string = 'K';
  unidadP: string = 'hPa';
  @ViewChild('texto') buscar! : ElementRef<HTMLInputElement>

  constructor(private service: ApiClimaService) { }

  getDatos(){
    const valor = this.buscar.nativeElement.value
    switch (valor) {
      case '':
        this.idOcultar = 'divOculto';
        break;
    
      default:
        this.service.getdatos( valor ).subscribe((datos: Clima) => {
        
        setTimeout(() => {
        this.idOcultar = 'divVisible';
        this.ciudad = datos.name;
        this.pais = datos.sys.country;
        this.sensacion = datos.main.feels_like;
        this.humedad = datos.main.humidity.toString();
        this.presion = datos.main.pressure;
        this.tempMax = datos.main.temp_max;
        this.tempMin = datos.main.temp_min;
        this.temp = datos.main.temp;
        this.descripcion = datos.weather[0].description;
        this.viento = datos.wind.speed.toString();
        }, 500);
      
      }, (error) => {
        this.idOcultar = 'divOculto';
      })
        break;
    }
    

  }
  
////////unidad temp////////////////
  Celsius(valor: string){
    this.cambioTemp = valor;
    this.unidadT = '°C';
  }
  Kelvin(valor: string){
    this.cambioTemp = valor;
    this.unidadT = 'K';
  }
  Fahrenheit(valor: string){
    this.cambioTemp = valor;
    this.unidadT = '°F';
  }
///////////unidad presion////////////////////
  Pascales(valor: string){
    this.cambioPresion = valor;
    this.unidadP = 'hPa';
  }
  Bar(valor: string){
    this.cambioPresion = valor;
    this.unidadP = 'b';
  }
  Torr(valor: string){
    this.cambioPresion = valor;
    this.unidadP = 'Torr';
  }
  Atmosfera(valor: string){
    this.cambioPresion = valor;
    this.unidadP = 'atm';
  }

}
