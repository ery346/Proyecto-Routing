import { NgModule } from '@angular/core';

import { LeydeohmComponent } from './leydeohm.component';
import { PrimeNgModule } from '../prime-ng/prime-ng.module';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    LeydeohmComponent
  ],
  imports: [
    PrimeNgModule,
    FormsModule
  ]
})
export class LeyohmModule { }
