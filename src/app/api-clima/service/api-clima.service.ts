import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Clima } from 'src/app/interface/interface.interface';

@Injectable({
  providedIn: 'root'
})
export class ApiClimaService {

  private urlConfig: string = '';

  private key: string = '228d5a2efa4f4f3194972234c5789e51';

  private url: string = 'https://api.openweathermap.org/data/2.5';

  constructor(private http: HttpClient) { }

  getdatos( valor: string ):Observable<Clima> {
    this.urlConfig = `${ this.url }/weather?q=${ valor }&appid=${ this.key }`;
    const clima = this.http.get<Clima>(this.urlConfig);
    return clima;
  }
}
