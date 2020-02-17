import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LandinglayerPage } from './landinglayer.page';

const routes: Routes = [
  {
    path: '',
    component: LandinglayerPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LandinglayerPageRoutingModule {}
