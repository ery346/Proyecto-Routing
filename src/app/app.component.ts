import { Component, OnInit } from '@angular/core';
import {MenuItem} from 'primeng/api';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  val: number = 0;

  items: MenuItem[] = [];

  ngOnInit() {
      this.items = [
          {
            label: 'Operaciones Basicas',
            icon: 'pi pi-fw pi-pencil',
            items: [
            {
            label: 'Suma',
            icon: 'pi pi-plus',
            routerLink: 'suma'
            },
            {
            label: 'Resta',
            icon: 'pi pi-minus',
            routerLink: 'resta'
            },
            {
            label: 'Multiplicacion',
            icon: 'pi pi-times',
            routerLink: 'multiplicacion'
            },
            {
            label: 'Division',
            icon: 'pi pi-pencil',
            routerLink: 'division'
            },]
          },
          {
            label: 'Ley de Ohm',
            icon: 'pi pi-bolt',
            routerLink: 'leydehom'
          },
          {
            label: 'Teorema de pitagoras',
            icon: 'pi pi-caret-up',
            routerLink: 'teoremap'
          },
          {
            label: 'API`S',
            icon: 'pi pi-circle-fill',
            items: [
              {
                label: 'Nasa ',
                routerLink: 'apinasa'
              },
              {
                label: 'Rick y Morty',
                routerLink: 'apirickandmorty'
              }
            ]
          },
          {
            label: 'dB',
            icon: 'pi pi-cloud',
            routerLink: 'ingresar'
          },
      ];
  }
}

