import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { NotdetailsPage } from './notdetails.page';

const routes: Routes = [
  {
    path: '',
    component: NotdetailsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class NotdetailsPageRoutingModule {}
