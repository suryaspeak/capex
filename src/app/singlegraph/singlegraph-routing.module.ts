import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SinglegraphPage } from './singlegraph.page';

const routes: Routes = [
  {
    path: '',
    component: SinglegraphPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SinglegraphPageRoutingModule {}
