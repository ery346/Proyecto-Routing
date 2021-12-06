import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, CanLoad, Route, RouterStateSnapshot, UrlSegment } from '@angular/router';
import { Observable } from 'rxjs';
import { IngresarService } from '../ingresarcuenta/service/ingresar.service';

@Injectable({
  providedIn: 'root'
})
export class RutasGuard implements CanActivate, CanLoad {
  
  constructor(private servicio: IngresarService){}

  get validacion(){
    return this.servicio.validar;
  }

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {

      if(this.validacion){
        return true;
      }else{
        return false;
      }

    
  }
  canLoad(
    route: Route,
    segments: UrlSegment[]): Observable<boolean > | Promise<boolean > | boolean  {
    
      
      if(this.validacion){
        return true;
      }else{
        return false;
      }
  }
}
