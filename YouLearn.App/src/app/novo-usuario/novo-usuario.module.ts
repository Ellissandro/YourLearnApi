import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { NovoUsuarioPageRoutingModule } from './novo-usuario-routing.module';

import { NovoUsuarioPage } from './novo-usuario.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    NovoUsuarioPageRoutingModule,
    ReactiveFormsModule,
    FormsModule
  ],
  declarations: [NovoUsuarioPage]
})
export class NovoUsuarioPageModule {}
