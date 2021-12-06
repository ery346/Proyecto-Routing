import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NuevacuentaComponent } from './page/nuevacuenta.component';
import { CuentaComponent } from './home/cuenta.component';
import { IngresarRoutingModule } from './ingresar-routing.module';
import { PrimeNgModule } from '../prime-ng/prime-ng.module';



@NgModule({
  declarations: [
    NuevacuentaComponent,
    CuentaComponent
  ],
  imports: [
    CommonModule,
    IngresarRoutingModule,
    PrimeNgModule
  ]
})
export class IngresarModule { }
