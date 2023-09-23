import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RickmortyService {

  constructor(
    private http: HttpClient
  ) { }

  getCharacters ():Observable<any>{
    return this.http.get('https://rickandmortyapi.com/api/character/?page=19');
  }
}
