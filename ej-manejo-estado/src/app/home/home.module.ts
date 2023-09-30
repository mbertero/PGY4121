import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormBuilder, FormGroup, FormsModule } from '@angular/forms';
import { HomePage } from './home.page';
import {HttpClientModule} from '@angular/common/http'

import { HomePageRoutingModule } from './home-routing.module';
import { HeaderComponent } from '../header/header.component';
import { HeaderModule } from '../header/header.module';
import { RickmortyService } from '../rickmorty.service';



@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HomePageRoutingModule,
    HeaderModule,
    HttpClientModule
  ],
  declarations: [HomePage],
  providers : [RickmortyService]
})
export class HomePageModule {}
