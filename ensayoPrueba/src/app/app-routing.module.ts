import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'listar-empleados',
    pathMatch: 'full'
  },
  {
    path: 'listar-empleados',
    loadChildren: () => import('./listar-empleados/listar-empleados.module').then( m => m.ListarEmpleadosPageModule)
  },
  {
    path: 'crear-empleados',
    loadChildren: () => import('./crear-empleados/crear-empleados.module').then( m => m.CrearEmpleadosPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
