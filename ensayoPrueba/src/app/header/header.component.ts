import { Component, OnInit } from '@angular/core';
import { StateService } from '../state/state.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent  implements OnInit {
  titulo:string=''

  constructor(private stateService:StateService) { 

  }

  ngOnInit() {
    this.stateService.getTitulo.subscribe((titulo)=>{
    this.titulo = titulo;

    })
  }

}
