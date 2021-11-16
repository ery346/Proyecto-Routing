import { Component, OnInit } from '@angular/core';
import {MenuItem} from 'primeng/api';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
 
  items: MenuItem[] = [];
  fecha: string | [] = '';

  ngOnInit() {
    let date = new Date();
    this.fecha = `${date}`.slice(0, 21);
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
                icon: 'pi pi-moon',
                routerLink: 'apinasa'
              },
              {
                label: 'Rick y Morty',
                icon: 'pi pi-star',
                routerLink: 'apirickandmorty'
              },
              {
                label: 'CLima',
                icon: 'pi pi-cloud',
                routerLink: 'clima'
              },
            ]
          }
      ];
  }
}

