import { Component } from '@angular/core';
import { ManejoApiService } from '../state/manejo-api.service';
import { Router } from '@angular/router';
import { StateService } from '../state/state.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  public usuarios: any;


  constructor(private manejoAPi: ManejoApiService, private stateService: StateService, private router: Router) {
    

    this.router.navigate(['Manejo de Api']);
    this.stateService.setTitulo = 'Manejo de Api'

   
    this.manejoAPi.getNombres().subscribe((data) => {
      console.log(data);
      this.usuarios = data;
      
    });

  }

  irANombre() {
    
   
  }

}
