import { HttpClient  } from '@angular/common/http';
import { Injectable, OnInit } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class RickmortyService {

  constructor( private http:HttpClient  ) {   }

  

  getCharacteres() {
    return this.http.get('https://rickandmortyapi.com/api/character/?page=19');
  }
}
