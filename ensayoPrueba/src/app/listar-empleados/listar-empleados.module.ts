import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ListarEmpleadosPageRoutingModule } from './listar-empleados-routing.module';

import { ListarEmpleadosPage } from './listar-empleados.page';
import { HeaderModule } from '../header/header.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ListarEmpleadosPageRoutingModule,
    HeaderModule
  ],
  declarations: [ListarEmpleadosPage]
})
export class ListarEmpleadosPageModule {}
