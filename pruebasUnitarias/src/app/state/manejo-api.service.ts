import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ManejoApiService {

  getNombre(perfilId: any) {
    throw new Error('Metodo no implementado');
  }

  private BASE_URL = 'https://dummyjson.com'

  constructor(private http: HttpClient) { }

  getNombres(){
    return this.http.get(`${this.BASE_URL}/users`)
  
  }
  getUsuarioId(usuarioId: string): Observable<any> {
    return this.http.get(`${this.BASE_URL}/users/${usuarioId}`);
  }
}
