import { Component } from '@angular/core';
import { obj } from 'src/app/interface/interface.interface';

@Component({
  selector: 'app-teoremadepitagoras',
  templateUrl: './teoremadepitagoras.component.html',
  styles: [
  ]
})
export class TeoremadepitagorasComponent  {

  objeto: obj = {
    hipotenusa: 0,
    catetoa: 0,
    catetob: 0
  }

  MostrarResultado1: string = '';

  error: string = '';

  Perimetro: number = 0;
  Area: number = 0;

  
  recolectarResultados(){
    if ((this.objeto.hipotenusa ===  0 || this.objeto.hipotenusa ===  null ) && (this.objeto.catetoa === 0 || this.objeto.catetoa === null ) && (this.objeto.catetob === 0  || this.objeto.catetob === null)) {
      this.error = 'Ingresa 2 valores';
      this.MostrarResultado1 = '';
      this.Area = 0;
      this.Perimetro = 0;
    }
    else if (this.objeto.hipotenusa > 0 && this.objeto.catetoa > 0 && this.objeto.catetob > 0 ) {
      this.error = 'Ingresa los valores necesarios';
      this.MostrarResultado1 = '';
      this.Area = 0;
      this.Perimetro = 0;
    }
    else if(this.objeto.hipotenusa === 0 || this.objeto.hipotenusa === null ){
      this.error = '';
      const hipo =  Math.sqrt(Math.pow(this.objeto.catetoa , 2) + Math.pow(this.objeto.catetob , 2));

      this.MostrarResultado1 = `La hipotenusa es : ${hipo}`;

      this.Perimetro = hipo + this.objeto.catetoa + this.objeto.catetob;

      this.Area = (this.objeto.catetoa * this.objeto.catetob) / 2; 
    }

    else if(this.objeto.catetoa === 0 || this.objeto.catetoa === null ){
      this.error = '';
      const catA = Math.sqrt(Math.pow(this.objeto.hipotenusa , 2) - Math.pow(this.objeto.catetob , 2));

      this.MostrarResultado1 = `El cateto A es : ${catA}`;

      this.Perimetro = this.objeto.hipotenusa + catA + this.objeto.catetob;
      
      this.Area = (catA * this.objeto.catetob) / 2; 
      
    }

    else if(this.objeto.catetob === 0 || this.objeto.catetob === null ){
      this.error = '';
      const catB = Math.sqrt(Math.pow(this.objeto.hipotenusa , 2) - Math.pow(this.objeto.catetoa , 2));

      this.MostrarResultado1 = `El cateto B es : ${catB}`;

      this.Perimetro = this.objeto.hipotenusa + this.objeto.catetoa + catB;
     
      this.Area = (this.objeto.catetoa * catB) / 2; 
    }
  }
}

