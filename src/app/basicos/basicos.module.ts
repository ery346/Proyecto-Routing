import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { SumaComponent } from './suma/suma.component';
import { RestaComponent } from './resta/resta.component';
import { MultiplicacionComponent } from './multiplicacion/multiplicacion.component';
import { DivisionComponent } from './division/division.component';
import { PrimeNgModule } from '../prime-ng/prime-ng.module';



@NgModule({
  declarations: [
    SumaComponent,
    RestaComponent,
    MultiplicacionComponent,
    DivisionComponent
  ],
  imports: [
    PrimeNgModule,
    FormsModule
  ],
  exports: [
    SumaComponent,
    RestaComponent,
    MultiplicacionComponent,
    DivisionComponent
  ]
})
export class BasicosModule { }
