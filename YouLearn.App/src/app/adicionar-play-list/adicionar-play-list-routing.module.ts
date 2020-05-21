import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AdicionarPlayListPage } from './adicionar-play-list.page';

const routes: Routes = [
  {
    path: '',
    component: AdicionarPlayListPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AdicionarPlayListPageRoutingModule {}
