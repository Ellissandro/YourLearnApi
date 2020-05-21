import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PlayListPageRoutingModule } from './play-list-routing.module';

import { PlayListPage } from './play-list.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PlayListPageRoutingModule
  ],
  declarations: [PlayListPage]
})
export class PlayListPageModule {}
