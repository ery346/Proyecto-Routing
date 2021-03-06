import { NgModule } from '@angular/core';


import {ButtonModule} from 'primeng/button';
import {MenubarModule} from 'primeng/menubar';
import {InputNumberModule} from 'primeng/inputnumber';
import {CardModule} from 'primeng/card';
import {SplitterModule} from 'primeng/splitter';
import {ImageModule} from 'primeng/image';
import {ProgressSpinnerModule} from 'primeng/progressspinner';
import {InputTextModule} from 'primeng/inputtext';
import {SidebarModule} from 'primeng/sidebar';

@NgModule({
  declarations: [
  ],
  exports: [
    ButtonModule,
    MenubarModule,
    InputNumberModule,
    CardModule,
    SplitterModule,
    ImageModule,
    ProgressSpinnerModule,
    InputTextModule,
    SidebarModule
  ]
})
export class PrimeNgModule { }
