import { Injectable } from '@angular/core';
import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { Response } from './interfaces/response';
import { catchError, map, tap} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private SERVER_URL = 'https://declaradesa.jne.gob.pe/Api/Service/GetImagePadron';
  constructor(private httpClient: HttpClient) { }

  public get(dni: string): Observable<Response> {
    const params = new HttpParams().set('DNI', dni);
    return this.httpClient.get<Response>(this.SERVER_URL, {params}).pipe(catchError(this.handleError<Response>('getDatosByDNI', null)));
  }

  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.error(error);
      return of(result as T);
    };
  }
}
