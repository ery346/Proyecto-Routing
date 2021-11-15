import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TeoremadepitagorasComponent } from './teoremadepitagoras.component';
import { FormsModule } from '@angular/forms';
import { PrimeNgModule } from '../prime-ng/prime-ng.module';



@NgModule({
  declarations: [TeoremadepitagorasComponent],
  imports: [
    CommonModule,
    FormsModule,
    PrimeNgModule
  ]
})
export class TeoremaModule { }
