import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ClimaComponent } from './component/clima.component';
import { PrimeNgModule } from '../prime-ng/prime-ng.module';
import { HttpClientModule } from '@angular/common/http';
import { TemperaturaPipe } from './pipes/temperatura.pipe';
import { PresionPipe } from './pipes/presion.pipe';


@NgModule({
  declarations: [
    ClimaComponent,
    TemperaturaPipe,
    PresionPipe,

  ],
  imports: [
    CommonModule,
    PrimeNgModule,
    HttpClientModule
  ]
})
export class ClimaModule { }
