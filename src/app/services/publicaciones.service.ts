import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { map, catchError, timeout, retry } from "rxjs/operators";
import { throwError, Observable } from "rxjs";
import { URL_SERVICIOS } from '../pages/config/config';
import { Publicaciones } from '../pages/models/usuario.model';
import { tokenName } from '@angular/compiler';
@Injectable({
  providedIn: 'root'
})
export class PublicacionesService {
  base_path = 'https://donacionesapp.herokuapp.com/publicaciones';
  public publicacion
  constructor(
    private http: HttpClient
  ) { }
  publicar(usuario:Publicaciones, token){
    let url = URL_SERVICIOS + "/publicaciones/publicar";
    console.log(usuario)
    try {
      return this.http.post(url, usuario,{
        headers: {
          'Authorization':token,
          'Content-Type':'application/json'}
      }).pipe(
      map((res: any) => {

        console.log("Publicacion: ",res);
          
          return res;

      }),
      catchError(err => {
        console.log("aqui-1");
        console.log(err);

        return throwError('Error al Publicar'+err);
      
      })
    );
  }catch(e){
    console.log("aqui_2");
   console.log(e);
  }

  }
}
