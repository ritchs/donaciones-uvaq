import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map, catchError, timeout } from "rxjs/operators";
import { throwError } from "rxjs";
import { URL_SERVICIOS } from '../pages/config/config';
import { UsuarioRegistro } from '../pages/models/usuario.model';

@Injectable({
  providedIn: 'root'
})
export class RegistroService {

  constructor(
    private http: HttpClient,
  ) { }

  registrar(usuario:UsuarioRegistro){

    let url = URL_SERVICIOS + "/usuarios/registro";
    
    try {
      return this.http.post(url, usuario).pipe(
      map((res: any) => {

        console.log("Usuario: ",res);
          
          return res;
        

      }),
      catchError(err => {
        return throwError('Error al registrar'+err);
      })
    );
  }catch(e){
   console.log(e);
  }

  }
}
