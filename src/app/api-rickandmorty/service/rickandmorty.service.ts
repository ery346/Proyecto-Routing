import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import {  Result, Personajes } from '../../interface/interface.interface';

@Injectable({
  providedIn: 'root'
})
export class RickandmortyService {

  private api: string = 'https://rickandmortyapi.com/api/';
  private configurl: string = '';
  constructor(private http: HttpClient) { }

  getPersonajes(valor: string): Observable<Personajes>{

    this.configurl = `${this.api}character/?name=${valor}`;
    const personajes = this.http.get<Personajes>(this.configurl);
    return personajes;

  }

}
