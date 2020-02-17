import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { GroupgraphPage } from './groupgraph.page';

const routes: Routes = [
  {
    path: '',
    component: GroupgraphPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class GroupgraphPageRoutingModule {}
