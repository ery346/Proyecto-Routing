import { Component} from '@angular/core';
import { Nasa } from 'src/app/interface/interface.interface';

import { AppapinasaService } from '../service/app-api-nasa.service';


@Component({
  selector: 'app-api-nasa',
  templateUrl: './api-nasa.component.html',
  styles: [
  ]
})
export class ApiNasaComponent {

  titulo: string = '';
  imagen: string = '';
  fecha: string = '';
  descripcion: string = '';
  copyright: string = '';
  spinner: string = 'spinOculto';
  div: string = 'divOculto';
  boton: boolean = false;
  constructor(private nasaService: AppapinasaService) { }

 
  //Da la informacion al instante
  // ngOnInit() {
  //   this.getTitle();
  // }
  // getData() {
  //   this.nasaService.getDatos().subscribe((data: Nasa) => {
  //     console.log(data);
  //     this.titulo = data.title;
  //   });
  // }

  // Boton  que da la informacion
  getDatos(){
    this.spinner = 'spin'
    setTimeout(() => {
      this.nasaService.getDatos().subscribe((data: Nasa) => {
        this.boton = true;
        this.div = 'divVisible'
        this.spinner = 'spinOculto';
        this.titulo = data.title;
        this.imagen = data.url;
        this.fecha = `Fecha: ${data.date}`;
        this.descripcion = `Descripcion ${data.explanation}`;
        this.copyright = `Copiright: ${data.copyright}`;
        
      });
    }, 2000);
    
  }
}
