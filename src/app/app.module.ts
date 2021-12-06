
import { LOCALE_ID, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';

import { PrimeNgModule } from './prime-ng/prime-ng.module';

import { BasicosModule } from './basicos/basicos.module';
import { AppRouterModule } from './router/app.router.module';
import { LeyohmModule } from './leydeohm/leyohm.module';
import { TeoremaModule } from './teoremadepitagoras/teorema.module';
import { ApiNasaModule } from './api-nasa/api-nasa.module';
import { RickandmortyModule } from './api-rickandmorty/rickandmorty.module';
import { ClimaModule } from './api-clima/clima.module';

import localeEs from "@angular/common/locales/es-MX";
import { registerLocaleData } from "@angular/common";
import { IngresarModule } from './ingresarcuenta/ingresar.module';


registerLocaleData( localeEs );

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    PrimeNgModule,
    AppRouterModule,
    BasicosModule,
    LeyohmModule,
    TeoremaModule,
    ApiNasaModule,
    RickandmortyModule,
    ClimaModule,
    IngresarModule
  ],
  
providers: [{provide: LOCALE_ID, useValue: 'es-MX'}],//idioma combiado de manera global
  bootstrap: [AppComponent]
})
export class AppModule { }
