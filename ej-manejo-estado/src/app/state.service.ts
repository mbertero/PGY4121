import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class StateService {
  mensaje: BehaviorSubject<string> = new BehaviorSubject('Mensaje');


  constructor() {   
  }
  get getMensaje(){
    return this.mensaje.asObservable();
  }

 
  set setMensaje(mensaje:string){
    this.mensaje.next(mensaje);
  }
}
