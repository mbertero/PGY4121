import { Component } from '@angular/core';
import { StateService } from '../state/state.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  nombre:string = 'invitado';

  ngOnInit() {
    this.stateService.getNombre.subscribe(
      (nombre) => {
        this.nombre = nombre;
      }
    )
  }

  constructor(private stateService: StateService, private router: Router) {
    if(this.nombre === ''){
      this.router.navigate(['login']);
    }
  }

  
}
