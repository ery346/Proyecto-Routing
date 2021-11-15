import { Component, OnInit } from '@angular/core';


interface productos {
  nombre: string;
  cantidad: string;
  precio: string;
  marca: string;
}
@Component({
  selector: 'app-db',
  templateUrl: './db.component.html',
  styles: [
  ]
})
export class DbComponent implements OnInit {

  datos: any = []
  objet: productos = {
  nombre:  '',
  cantidad: '',
  precio: '',
  marca:  ''
  }
 
nomb: string = ''
cant: string = ''
  constructor() { }

  ngOnInit(): void {
  }

  calcular(){

    this.datos = [...this.datos, this.objet];

    this.nomb = this.datos

    console.log(this.datos)
    // this.datos.forEach((element: productos) => {
    //   const {nombre, cantidad} = element
    //   this.nomb = `${nombre}`;
    //   this.cant = `${cantidad}`
    //   console.log(element)
      
    // });
    
  }

  limpiar(){
  
    this.objet.nombre = '';
    this.objet.cantidad = '';
    this.objet.precio = '';
    this.objet.marca = '';
  }
}
