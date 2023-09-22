import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { LoginService } from './login.service';

@Injectable({
  providedIn: 'root'
})
export class LoginGuard implements CanActivate {

  //constructor
  constructor(
    private loginService: LoginService,
    private router: Router
  ) {}


  canActivate(): boolean {
    let isLogged: boolean = false;
    this.loginService.getIsLogged().subscribe((value: boolean) => {
      console.log(value)
      isLogged = value;
      if(!value){
        this.router.navigateByUrl('/login');
      }
    });
    console.log(isLogged);
    return isLogged;
  }

}