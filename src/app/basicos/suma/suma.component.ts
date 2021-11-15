import { Component } from '@angular/core';

@Component({
  selector: 'app-suma',
  templateUrl: './suma.component.html',
  styles: [
    
  ]
})
export class SumaComponent  {

  val: number = 0;
  val2: number = 0;
  resultado: number = 0;
  calcular(){
   this.resultado = this.val + this.val2
  
  }

}
