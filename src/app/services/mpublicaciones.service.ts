import { Injectable } from '@angular/core';
import { URL_SERVICIOS } from '../pages/config/config';
import { HttpErrorResponse, HttpClient } from '@angular/common/http';
import { map, catchError, retry } from 'rxjs/operators';
import { throwError, Observable } from 'rxjs';
import { Publicaciones } from '../pages/models/usuario.model';

@Injectable({
  providedIn: 'root'
})
export class MpublicacionesService {
  base_path = 'https://donacionesapp.herokuapp.com/publicaciones';
  public publicacion
  constructor(
    private http: HttpClient
  ) { }
publicaciones(token){
  let url = URL_SERVICIOS + "/publicaciones";
  try {
    return this.http.get(url,{
      headers: {
        'Authorization':token,
        'Content-Type':'application/json'}
    }).pipe(
    map((res: any) => {

      console.log("Publicaciones: ",res);
        
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
handleError(error: HttpErrorResponse) {
  if (error.error instanceof ErrorEvent) {
    // A client-side or network error occurred. Handle it accordingly.
    console.error('An error occurred:', error.error.message);
  } else {
    // The backend returned an unsuccessful response code.
    // The response body may contain clues as to what went wrong,
    console.error(
      `Backend returned code ${error.status}, ` +
      `body was: ${error.error}`);
  }
  // return an observable with a user-facing error message
  return throwError(
    'Something bad happened; please try again later.');
};
getList(token): Observable<Publicaciones> {
  return this.http
    .get<Publicaciones>(this.base_path,{
      headers: {
        'Authorization':token}
    }).pipe(
      retry(2),
      catchError(this.handleError)
    )
}
}