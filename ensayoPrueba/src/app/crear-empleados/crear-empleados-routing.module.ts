import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CrearEmpleadosPage } from './crear-empleados.page';

const routes: Routes = [
  {
    path: '',
    component: CrearEmpleadosPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CrearEmpleadosPageRoutingModule {}
