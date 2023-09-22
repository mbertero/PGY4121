import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { StateService } from '../state/state.service';

@Component({
  selector: 'app-recupera-pass',
  templateUrl: './recupera-pass.page.html',
  styleUrls: ['./recupera-pass.page.scss'],
})
export class RecuperaPassPage implements OnInit {

  formularioRecuperacion: FormGroup;

  constructor(private fb: FormBuilder, private router: Router, private stateService: StateService) { 
    this.formularioRecuperacion = this.fb.group(
      {
        nombre: [""]
      }
    )
  }

  ngOnInit() {
  }

  recuperar() {
    const usuario = {
      nombre: this.formularioRecuperacion.get('nombre')?.value,
    }

    if(usuario.nombre === ''){
      alert('Debes ingresar tu nombre de usuario');
      return;
    }

    const nombre = usuario.nombre;

    this.stateService.setNombre = 'invitado'
    this.stateService.setTitulo = 'Homepage'
    this.router.navigate(['login']);
  }

}
