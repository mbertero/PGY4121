import { Component, OnInit } from '@angular/core';
import { RickmortyService } from '../rickmorty.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})

// Aqui nace el componente ..aqui con OnInit
export class HomePage implements OnInit {

  constructor(private rmService:RickmortyService) {}


  ngOnInit(): void {
      this.rmService.getCharacters().subscribe(
        (data)=> {
          console.log(data);
        }
      )
  }

}
