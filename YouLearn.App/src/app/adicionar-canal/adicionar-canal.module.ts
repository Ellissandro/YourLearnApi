import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AdicionarCanalPageRoutingModule } from './adicionar-canal-routing.module';

import { AdicionarCanalPage } from './adicionar-canal.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AdicionarCanalPageRoutingModule
  ],
  declarations: [AdicionarCanalPage]
})
export class AdicionarCanalPageModule {}
