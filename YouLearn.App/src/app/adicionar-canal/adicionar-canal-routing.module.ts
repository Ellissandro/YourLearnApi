import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AdicionarCanalPage } from './adicionar-canal.page';

const routes: Routes = [
  {
    path: '',
    component: AdicionarCanalPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AdicionarCanalPageRoutingModule {}
