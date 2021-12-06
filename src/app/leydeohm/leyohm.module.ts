import { NgModule } from '@angular/core';

import { LeydeohmComponent } from './home/leydeohm.component';
import { PrimeNgModule } from '../prime-ng/prime-ng.module';
import { FormsModule } from '@angular/forms';
import { LeydehomRoutingModule } from './leydehom-routing.module';
import { CircuitoRcComponent } from './pages/circuitorc/circuito-rc.component';
import { ImpendaciaComponent } from './pages/impendacia/impendacia.component';
import { ResistenciasParaleloComponent } from './pages/resistencias-paralelo/resistencias-paralelo.component';



@NgModule({
  declarations: [
    LeydeohmComponent,
    CircuitoRcComponent,
    ImpendaciaComponent,
    ResistenciasParaleloComponent
  ],
  imports: [
    PrimeNgModule,
    FormsModule,
    LeydehomRoutingModule
  ]
})
export class LeyohmModule { }
