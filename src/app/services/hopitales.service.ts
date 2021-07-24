import { Injectable, Pipe } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { map, retry, catchError, timeout } from "rxjs/operators";
import { Observable, throwError } from "rxjs";
import { URL_SERVICIOS } from '../pages/config/config';
import { Hospitales } from '../pages/models/usuario.model';

import { HttpClientModule } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HopitalesService {

  base_path = 'https://donacionesapp.herokuapp.com/hospitales';
  //let base_path = URL_SERVICIOS + "/hospitales";

  constructor(
    private http: HttpClient
  ) {}

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
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

  getList(token): Observable<Hospitales> {
    return this.http
      .get<Hospitales>(this.base_path,{
        headers: {
          'Authorization':token}
      }).pipe(
        retry(2),
        catchError(this.handleError)
      )
  }
}
