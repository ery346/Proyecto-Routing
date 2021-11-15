
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';

import { PrimeNgModule } from './prime-ng/prime-ng.module';
import { BasicosModule } from './basicos/basicos.module';
import { AppRouterModule } from './router/app.router.module';
import { LeyohmModule } from './leydeohm/leyohm.module';
import { TeoremaModule } from './teoremadepitagoras/teorema.module';
import { ApiNasaModule } from './api-nasa/api-nasa.module';
import { RickandmortyModule } from './api-rickandmorty/rickandmorty.module';
import { DbComponent } from './basededatos/component/db.component';
import { DbModule } from './basededatos/db.module';


@NgModule({
  declarations: [
    AppComponent,

  ],
  imports: [
    BrowserModule,
    PrimeNgModule,
    AppRouterModule,
    BasicosModule,
    LeyohmModule,
    TeoremaModule,
    ApiNasaModule,
    RickandmortyModule,
    DbModule

  ],
  
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
