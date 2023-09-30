import { Component, OnInit } from '@angular/core';
import { StateService } from '../state.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent  implements OnInit {

  
  mensaje:string = '';

  constructor(private stateService : StateService) { }
  ngOnInit() {
    this.stateService.getMensaje.subscribe(
      (mensaje) => {
        this.mensaje = mensaje;
      }
    )

 
  };


}
