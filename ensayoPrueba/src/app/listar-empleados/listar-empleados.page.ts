import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { StateService } from '../state/state.service';


interface Empleados {
    nombre : string;
    edad : number;
    cargo: string;
  }


@Component({
  selector: 'app-listar-empleados',
  templateUrl: './listar-empleados.page.html',
  styleUrls: ['./listar-empleados.page.scss'],
})
export class ListarEmpleadosPage implements OnInit {

  empleados : Empleados[]= [
   {
    nombre: "Juan",
    edad : 25,
    cargo: "Ingeniero"
   },
   {
    nombre: "Pedro",
    edad : 30,
    cargo: "Mecanico"
   },
   {
    nombre: "Diego",
    edad : 35,
    cargo: "Diseñador"
   },

  ]


  constructor(private router:Router, private stateService:StateService) { }

  ngOnInit() {
  }

  irACrear(){
    this.stateService.setTitulo = 'Crear empleado'
    this.router.navigate(['/crear-empleados'])

  }

}
