import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AdicionarPlayListPageRoutingModule } from './adicionar-play-list-routing.module';

import { AdicionarPlayListPage } from './adicionar-play-list.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AdicionarPlayListPageRoutingModule
  ],
  declarations: [AdicionarPlayListPage]
})
export class AdicionarPlayListPageModule {}
