import { NgModule } from '@angular/core';

import { RickandmortyComponent } from './component/rickandmorty.component';
import { PrimeNgModule } from '../prime-ng/prime-ng.module';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';



@NgModule({
  declarations: [RickandmortyComponent],
  imports: [
    PrimeNgModule,
    FormsModule,
    CommonModule
  ]
})
export class RickandmortyModule { }
