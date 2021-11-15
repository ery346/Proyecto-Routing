import { NgModule } from '@angular/core';

import { ApiNasaComponent } from './component/api-nasa.component';
import { HttpClientModule } from '@angular/common/http';
import { PrimeNgModule } from '../prime-ng/prime-ng.module';



@NgModule({
  declarations: [ApiNasaComponent],
  imports: [
    PrimeNgModule,
    HttpClientModule
  ]
})
export class ApiNasaModule { }
