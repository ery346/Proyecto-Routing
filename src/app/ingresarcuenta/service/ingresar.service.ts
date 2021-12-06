import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class IngresarService {

  valorBoleano!: boolean;

  get validar(){
    return this.valorBoleano
  }
  constructor() { }

  getValidacion( valor: boolean ){
    return  this.valorBoleano = valor;
  }

}
