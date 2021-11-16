import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { SumaComponent } from '../basicos/suma/suma.component';
import { RestaComponent } from '../basicos/resta/resta.component';
import { MultiplicacionComponent } from '../basicos/multiplicacion/multiplicacion.component';
import { DivisionComponent } from '../basicos/division/division.component';
import { LeydeohmComponent } from '../leydeohm/leydeohm.component';
import { TeoremadepitagorasComponent } from '../teoremadepitagoras/teoremadepitagoras.component';
import { ApiNasaComponent } from '../api-nasa/component/api-nasa.component';
import { RickandmortyComponent } from '../api-rickandmorty/component/rickandmorty.component';
import { ClimaComponent } from '../api-clima/component/clima.component';



const rutas: Routes = [
  {
    path: '',
    component: SumaComponent,
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
    path: 'leydehom',
    component: LeydeohmComponent,
  },
  {
    path: 'teoremap',
    component: TeoremadepitagorasComponent,
  },
  {
    path: 'apinasa',
    component: ApiNasaComponent,
  },
  {
    path: 'apirickandmorty',
    component: RickandmortyComponent,
  },
  {
    path: 'clima',
    component: ClimaComponent,
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
