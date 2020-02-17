import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { YearselectPage } from './yearselect.page';

const routes: Routes = [
  {
    path: '',
    component: YearselectPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class YearselectPageRoutingModule {}
