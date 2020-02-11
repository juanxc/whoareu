import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private SERVER_URL = 'http://declaradesa.jne.gob.pe/Api/Service/GetImagePadron';
  constructor(private httpClient: HttpClient) { }

  public get(dni: string) {
    const params = new HttpParams().set('DNI', dni);
    return this.httpClient.get(this.SERVER_URL, {params});
  }
}
