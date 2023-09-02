import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CrearEmpleadosPageRoutingModule } from './crear-empleados-routing.module';

import { CrearEmpleadosPage } from './crear-empleados.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CrearEmpleadosPageRoutingModule,
    ReactiveFormsModule
  ],
  declarations: [CrearEmpleadosPage]
})
export class CrearEmpleadosPageModule {}
