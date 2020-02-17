import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { GrpahmodalPage } from './grpahmodal.page';

const routes: Routes = [
  {
    path: '',
    component: GrpahmodalPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class GrpahmodalPageRoutingModule {}
