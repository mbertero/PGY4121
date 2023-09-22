import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class StateService {

  titulo: BehaviorSubject<string> = new BehaviorSubject('Login');
  nombre: BehaviorSubject<string> = new BehaviorSubject('invitado');

  constructor() { }

  get getTitulo(){
    return this.titulo.asObservable();
  }

  get getNombre(){
    return this.nombre.asObservable();
  }

  set setTitulo(titulo:string){
    this.titulo.next(titulo);
  }

  set setNombre(nombre:string){
    this.nombre.next(nombre);
  }
}
