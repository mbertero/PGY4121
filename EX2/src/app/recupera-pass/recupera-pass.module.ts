import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RecuperaPassPageRoutingModule } from './recupera-pass-routing.module';

import { RecuperaPassPage } from './recupera-pass.page';
import { HeaderModule } from '../header/header.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RecuperaPassPageRoutingModule,
    ReactiveFormsModule,
    HeaderModule
  ],
  declarations: [RecuperaPassPage]
})
export class RecuperaPassPageModule {}
