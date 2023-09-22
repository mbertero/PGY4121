import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  private isLogged:BehaviorSubject<boolean> =
  new BehaviorSubject<boolean> (false);

  getIsLogged(){
    return this.isLogged.asObservable();
  }

  setIsLogged(value:boolean){
    this.isLogged.next(value);
  }

  constructor() { }
}
