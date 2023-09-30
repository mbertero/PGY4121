import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

import { StateService } from '../state.service';
import { RickmortyService } from '../rickmorty.service';

interface Messagge {
  mensaje: string;
 
}
@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit{
  personaje:any;

  formIngresarMensaje: FormGroup; //Declarando formulario reactivo
  mensaje:string = '';

  constructor(private fb:FormBuilder, private stateService: StateService, private serviceRM:RickmortyService) {
   this.formIngresarMensaje = new FormGroup({
    //this.mensaje = new FormControl('')
   })

  }

  ngOnInit():void {
    this.serviceRM.getCharacteres().subscribe((data:any)=>{
      this.personaje =data;
      console.log(data);
    })
  }

  // ingresaMensaje(){

  //   const messagge = {
   // console.log(this.formIngresarMensaje.value.mensaje)

  //   //  mensaje = this.formIngresarMensaje.get('mensaje')?.value,
        
  //   // }
  //   // const mensaje = messagge.mensaje;

  
  //   // this.stateService.setMensaje = mensaje;

  // }

  // borrar() {
  //   this.stateService.setMensaje ="" 
//     this.formIngresarMensaje.reset();
  // }

}
