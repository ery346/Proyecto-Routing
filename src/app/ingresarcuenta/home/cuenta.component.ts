import { Component, OnInit } from '@angular/core';
import { IngresarService } from '../service/ingresar.service';

@Component({
  selector: 'app-cuenta',
  templateUrl: './cuenta.component.html',
  styles: [
  ]
})
export class CuentaComponent implements OnInit {

  constructor(private servicio: IngresarService) { }

  ngOnInit(): void {
  }

  login(){

    const valor = true;
    this.servicio.getValidacion( valor )
  }
}
