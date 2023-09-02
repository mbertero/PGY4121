import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ListarEmpleadosPage } from './listar-empleados.page';

const routes: Routes = [
  {
    path: '',
    component: ListarEmpleadosPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ListarEmpleadosPageRoutingModule {}
