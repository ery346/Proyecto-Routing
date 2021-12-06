import { NgModule } from '@angular/core';

import { Routes, RouterModule } from '@angular/router';

import { CuentaComponent } from './home/cuenta.component';
import { NuevacuentaComponent } from './page/nuevacuenta.component';

///////////////////Rutas hijas
const ruta: Routes = [
  {
    path: '', /////////////ruta de entrada(padre) 'ingresar'
    children: [
      {
        path: 'cuenta',
        component: CuentaComponent
      },
      {
        path: '**', //////////////////////Cuando no encuentre 'cuenta' o 'nuevacuenta' redirecciona a
        component: NuevacuentaComponent
      }
    ]
  }
]

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forChild( ruta )
  ],
  exports: [
    RouterModule
  ]
})
export class IngresarRoutingModule { }
