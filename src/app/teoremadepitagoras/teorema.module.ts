import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TeoremadepitagorasComponent } from './home/teoremadepitagoras.component';
import { FormsModule } from '@angular/forms';
import { PrimeNgModule } from '../prime-ng/prime-ng.module';
import { CilindroComponent } from './pages/cilindro/cilindro.component';
import { TeoremaRoutingModule } from './teorema-routing.module';
import { CircunferenciaComponent } from './pages/circunferencia/circunferencia.component';
import { TrapecioComponent } from './pages/trapecio/trapecio.component';




@NgModule({
  declarations: [TeoremadepitagorasComponent, CilindroComponent, CircunferenciaComponent, TrapecioComponent],
  imports: [
    CommonModule,
    FormsModule,
    PrimeNgModule,
    TeoremaRoutingModule
  ]
})
export class TeoremaModule { }
