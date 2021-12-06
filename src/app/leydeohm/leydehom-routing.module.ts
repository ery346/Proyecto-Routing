import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CircuitoRcComponent } from './pages/circuitorc/circuito-rc.component';
import { LeydeohmComponent } from './home/leydeohm.component';
import { NuevacuentaComponent } from '../ingresarcuenta/page/nuevacuenta.component';
import { ImpendaciaComponent } from './pages/impendacia/impendacia.component';
import { ResistenciasParaleloComponent } from './pages/resistencias-paralelo/resistencias-paralelo.component';
import { RutasGuard } from '../guard/rutas.guard';


const rutas: Routes = [
  {
    path: '',
    children: [
      {
        path: 'circuitorc',
        component: CircuitoRcComponent,
        canLoad: [ RutasGuard ],
        canActivate: [ RutasGuard ]
      },
      {
        path: 'ingresar',
        component: NuevacuentaComponent,
        canLoad: [ RutasGuard ],
        canActivate: [ RutasGuard ]
      },
      {
        path: 'impedancia',
        component: ImpendaciaComponent,
        canLoad: [ RutasGuard ],
        canActivate: [ RutasGuard ]
      },
      {
        path: 'resistenciasp',
        component: ResistenciasParaleloComponent,
        canLoad: [ RutasGuard ],
        canActivate: [ RutasGuard ]
      },
      {
        path: '**',
        component: LeydeohmComponent
      }
    ]
  }
]

@NgModule({
  imports: [
    RouterModule.forChild( rutas )
  ],
  exports: [
    RouterModule
  ]
})
export class LeydehomRoutingModule { }
