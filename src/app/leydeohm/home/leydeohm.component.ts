import { Component } from '@angular/core';
import { valores } from '../../interface/interface.interface';

@Component({
  selector: 'app-leydeohm',
  templateUrl: './leydeohm.component.html',
  styles: [
  ]
})
export class LeydeohmComponent  {
 
  objeto: valores = {
  valorR: 0,
  valorV: 0,
  valorI: 0,
  valorW: 0,
  }

  display!: boolean;

  error: string = '';
  
  calcular(){

    if(this.objeto.valorI === 0 && this.objeto.valorR === 0 && this.objeto.valorV === 0 && this.objeto.valorW === 0){
      this.error = 'Error'
    }

    else if(this.objeto.valorR === 0 && this.objeto.valorW === 0){
     this.error = '';
      const resistencia = this.objeto.valorV / this.objeto.valorI;
      const potencia = this.objeto.valorV * this.objeto.valorI;
      this.objeto.valorR = resistencia;
      this.objeto.valorW = potencia;
      return
    }
    else if (this.objeto.valorV === 0 && this.objeto.valorR === 0) {
      this.error = '';
      const voltaje = this.objeto.valorW * this.objeto.valorI;
      const resistencia = this.objeto.valorW / Math.pow(this.objeto.valorI, 2);
      this.objeto.valorV = voltaje;
      this.objeto.valorR = resistencia;
      return
    }
    else if (this.objeto.valorI === 0 && this.objeto.valorW === 0){
      this.error = '';
      const potencia: number = Math.pow(this.objeto.valorV, 2) / this.objeto.valorR ;
      const corriente: number = this.objeto.valorV / this.objeto.valorR;
      this.objeto.valorW = potencia;
      this.objeto.valorI = corriente;
      return
    }
    else if (this.objeto.valorR === 0 && this.objeto.valorI === 0){
      this.error = '';
      const corriente: number = this.objeto.valorW / this.objeto.valorV ;
      const resistencia: number = Math.pow(this.objeto.valorV, 2) / this.objeto.valorW;
      this.objeto.valorI = corriente;
      this.objeto.valorR = resistencia;
      return
    }
    else if (this.objeto.valorV === 0 && this.objeto.valorW === 0){
      this.error = '';
      const voltaje: number = this.objeto.valorR / Math.pow(this.objeto.valorI, 2) ;
      const potencia: number = this.objeto.valorI / this.objeto.valorR;
      this.objeto.valorV = voltaje;
      this.objeto.valorW = potencia;
      return
    }
    else if (this.objeto.valorV === 0 && this.objeto.valorI === 0){
      this.error = '';
      const intensidad: number = Math.sqrt(this.objeto.valorW / this.objeto.valorR );
      const voltaje: number = this.objeto.valorW / this.objeto.valorR;
      this.objeto.valorI = intensidad;
      this.objeto.valorV = voltaje;
      return
    }
    
    
  }

  limpiar(){
    this.objeto.valorR = 0;
    this.objeto.valorV = 0;
    this.objeto.valorI = 0;
    this.objeto.valorW = 0;
  }


}
