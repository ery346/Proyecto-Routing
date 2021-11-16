import { Component, ElementRef, ViewChild} from '@angular/core';

import { RickandmortyService } from '../service/rickandmorty.service';

import { Personajes, Result } from 'src/app/interface/interface.interface';



@Component({
  selector: 'app-rickandmorty',
  templateUrl: './rickandmorty.component.html',
  styles: [
  ]
})
export class RickandmortyComponent  {
  resultado: Result[] = [];
  especie: string = '';
  nombres: string = '' ;
  estatus: string = '';
  imagen: string = '';
  genero: string = '';
  origen: string = '';
  locacion: string = '';

  class: string = '';
  error: string = '';
  spinner: string = 'spinOculto';
  div: string = 'divOculto';
  @ViewChild('text') buscar! : ElementRef<HTMLInputElement>

  // perso: Personajes | any = '';
  constructor(private servicio: RickandmortyService) { }
  

  personajes(){
    const valor = this.buscar.nativeElement.value;
    this.div = 'divOculto';
    this.class = '';
    this.error = '';
    if(valor === ''){
      this.spinner = 'spin'
      setTimeout(() => {
      this.spinner = 'spinOculto';
      this.div ='divVisible';
      this.nombres = '';
      this.estatus = '';
      this.especie = '';
      this.imagen = '';
      this.genero = '';
      this.origen = '';
      this.locacion = '';
      this.error = 'ERROR!! Ingresa algun nombre de la caricatura o alguna letra';
      this.class = 'error';
    }, 2000);
    }else{

      this.spinner = 'spin'
      this.servicio.getPersonajes( valor ).subscribe( (datos: Personajes) => {
        setTimeout(() => {
      this.spinner = 'spinOculto';
      this.div = 'divOculto';
      this.class = '';
      this.error = '';
      this.resultado = datos.results;
      console.log(this.resultado)
        }, 2000);
      

    }, (error) => {
      setTimeout(() => {
      this.spinner = 'spinOculto';
      this.nombres = '';
      this.estatus = '';
      this.especie = '';
      this.imagen = '';
      this.genero = '';
      this.origen = '';
      this.locacion = '';
      this.div ='divVisible';
      this.class = 'error';
      this.error = 'Error de Busqueda!!!!';
      }, 3000);
      
    });
  
    }

  }

}
