import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { StateService } from '../state/state.service';
import { ManejoApiService } from '../state/manejo-api.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent  implements OnInit {
  titulo: string = '';
 

  constructor(private stateService: StateService, private manejoAPi: ManejoApiService, private router: Router) {
  
  }

  ngOnInit() {
    this.stateService.getTitulo.subscribe((titulo) => {
      this.titulo = titulo;
    });




  
  }


}
