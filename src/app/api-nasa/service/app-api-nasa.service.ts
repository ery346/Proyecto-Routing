import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Nasa } from 'src/app/interface/interface.interface';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AppapinasaService {

  private configUrl: string | undefined;
  private apiKey: string = '585TuzHV7BgijSs0no8A1rVWY6ChAEcVsj7ltqiD';
  private Url: string = 'https://api.nasa.gov/planetary';

  constructor(private http : HttpClient) { }
  
  getDatos(): Observable<Nasa> {
    this.configUrl = `${ this.Url }/apod?api_key=${ this.apiKey }`;
    const apod = this.http.get<Nasa>(this.configUrl);
    return apod;
  }
}
