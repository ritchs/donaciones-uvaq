import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map, catchError, timeout, retry } from "rxjs/operators";
import { throwError, Observable } from "rxjs";
import { URL_SERVICIOS } from '../pages/config/config';
import { Usuario } from '../pages/models/usuario.model';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  base_path = 'https://donacionesapp.herokuapp.com/publicaciones';
  public usuario: any
  menu: boolean;
  constructor(
    private http: HttpClient,
  ) { }

  guardarStorage(token, usuario){

    localStorage.setItem('token',token);
    localStorage.setItem('nombre',usuario.nombre);
    localStorage.setItem('tipoDonador',usuario.tipoDeDonador);
    localStorage.setItem('tipoSangre',usuario.tipoDeSangre);
    localStorage.setItem('peso',usuario.peso);

    console.log('Configuración realizada.');

  }

  login(usuario: Usuario){
    let url = URL_SERVICIOS + "/usuarios/login";

    try {
      return this.http.post(url, usuario).pipe(
      map((res: any) => {
          console.log(res);
          this.guardarStorage(res.authToken, res.usuario);
          
          return res;
        

      }),
      catchError(err => {
        return throwError('Credenciales Invalidas'+err);
      })
    );
  }catch(e){
   console.log(e);
  }
  }

  getList(token): Observable<Usuario> {
    return this.http
      .get<Usuario>(this.base_path,{
        headers: {
          'Authorization':token}
      }).pipe(
        retry(2),
        catchError(this.handleError)
      )
  }
  handleError(handleError: any): import("rxjs").OperatorFunction<Usuario, any> {
    throw new Error("Method not implemented.");
  }
}
