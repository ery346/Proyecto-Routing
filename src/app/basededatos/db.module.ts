import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { PrimeNgModule } from '../prime-ng/prime-ng.module';
import { DbComponent } from './component/db.component';




@NgModule({
  declarations: [DbComponent],
  imports: [
    PrimeNgModule,
    FormsModule,
    CommonModule

  ]
})
export class DbModule { }
