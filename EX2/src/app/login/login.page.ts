import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { StateService } from '../state/state.service';

interface Usuario {
  nombre: string;
  password: string;
}

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  formIngresarUsuario: FormGroup; //Declarando formulario reactivo
  nombre:string = '';
  
  usuario1: Usuario = {
    nombre: 'Jose',
    password: '1234'
  }


  constructor(private fb: FormBuilder, private router: Router, private stateService: StateService) {
    this.formIngresarUsuario = this.fb.group(
      {
        nombre: [""],
        password: [""]
      }
    )
   }

  ngOnInit() {
  }

  ingresarUsuario(){
    const usuario = {
      nombre: this.formIngresarUsuario.get('nombre')?.value,
      password: this.formIngresarUsuario.get('password')?.value
    }

    if(usuario.nombre === '' || usuario.password === ''){
      alert('Debes llenar todos los campos')
      return;
    }

    if(usuario.nombre != this.usuario1.nombre ||usuario.password != this.usuario1.password){
      alert('Usuario o contraseña incorrecto, vuelve a intentarlo');
      return;
    }

    const nombre = usuario.nombre;

    this.stateService.setTitulo = 'Homepage'
    this.stateService.setNombre = nombre;
    this.router.navigate(['home']);
    
  }

  irARecuperar() {
    this.stateService.setNombre = 'invitado'
    this.stateService.setTitulo = 'Recuperar contraseña'
    this.router.navigate(['recupera-pass']);
  }

  recuperarUsuario(){
    
  }

}
