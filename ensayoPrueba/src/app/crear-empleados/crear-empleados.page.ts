import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-crear-empleados',
  templateUrl: './crear-empleados.page.html',
  styleUrls: ['./crear-empleados.page.scss'],
})
export class CrearEmpleadosPage implements OnInit {

  formularioCrearEmpleado : FormGroup;

  constructor(private fb:FormBuilder) { 
    this.formularioCrearEmpleado = this.fb.group({
      nombre: [''],
      edad : [0],
      cargo:['']
    })
  }


  ngOnInit() {
  }


  grabarEmpleado () { 
    console.log('Ingresando a la función de grabarEmpleado')
    const empleado = {
      nombre: this.formularioCrearEmpleado.get('nombre')?.value,
      edad  : this.formularioCrearEmpleado.get('edad')?.value,
      cargo : this.formularioCrearEmpleado.get('cargo')?.value
    }
    if(empleado.edad>= 18){

      console.log(empleado)

      return 
    }
    console.log("No es mayor de edad ")
  }

}
