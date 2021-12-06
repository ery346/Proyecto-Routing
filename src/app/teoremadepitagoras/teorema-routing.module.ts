import { NgModule } from '@angular/core';

import { Routes, RouterModule } from '@angular/router';
import { TeoremadepitagorasComponent } from './home/teoremadepitagoras.component';
import { CilindroComponent } from './pages/cilindro/cilindro.component';
import { CircunferenciaComponent } from './pages/circunferencia/circunferencia.component';
import { TrapecioComponent } from './pages/trapecio/trapecio.component';
import { RutasGuard } from '../guard/rutas.guard';

const rutas: Routes =[
  {
    path: '',
    children: [
      {
        path: 'cilindro',
        component: CilindroComponent,
        canLoad: [ RutasGuard ],
        canActivate: [ RutasGuard ]
      },
      {
        path: 'circunferencia',
        component: CircunferenciaComponent,
        canLoad: [ RutasGuard ],
        canActivate: [ RutasGuard ]
      },
      {
        path: 'trapecio',
        component: TrapecioComponent,
        canLoad: [ RutasGuard ],
        canActivate: [ RutasGuard ]
      },
      {
        path: '**',
        component: TeoremadepitagorasComponent
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
export class TeoremaRoutingModule { }
