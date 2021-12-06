import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { RestaComponent } from '../basicos/resta/resta.component';
import { MultiplicacionComponent } from '../basicos/multiplicacion/multiplicacion.component';
import { DivisionComponent } from '../basicos/division/division.component';
import { ApiNasaComponent } from '../api-nasa/component/api-nasa.component';
import { RickandmortyComponent } from '../api-rickandmorty/component/rickandmorty.component';
import { ClimaComponent } from '../api-clima/component/clima.component';
import { RutasGuard } from '../guard/rutas.guard';
import { CuentaComponent } from '../ingresarcuenta/home/cuenta.component';


const rutas: Routes = [
  {
    path: '',
    component: CuentaComponent,
    pathMatch: 'full'
  },
  {
    path: 'resta',
    component: RestaComponent,
  },
  {
    path: 'multiplicacion',
    component: MultiplicacionComponent,
  },
  {
    path: 'division',
    component: DivisionComponent,
  },
  {
    path: 'leydeohm',
    loadChildren: () => import('src/app/leydeohm/leyohm.module').then(m => m.LeyohmModule)
  },
  {
    path: 'teoremap',
    loadChildren: () => import('src/app/teoremadepitagoras/teorema.module').then(m => m.TeoremaModule)
  },
  {
    path: 'apinasa',
    component: ApiNasaComponent,
    canActivate: [ RutasGuard ]
  },
  {
    path: 'apirickandmorty',
    component: RickandmortyComponent,
    canActivate: [ RutasGuard ]
  },
  {
    path: 'clima',
    component: ClimaComponent,
    canActivate: [ RutasGuard ]
  },
  {
    path: 'ingresar',
    loadChildren: () => import('src/app/ingresarcuenta/ingresar.module').then( m => m.IngresarModule )
  },
 
  {
    path: '**',
    redirectTo: ''
  },
]


@NgModule({
  imports: [
    RouterModule.forRoot( rutas )
  ],
  exports: [
    RouterModule
  ]
})
export class AppRouterModule { }
