import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BudgetreportPage } from './budgetreport.page';

const routes: Routes = [
  {
    path: '',
    component: BudgetreportPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BudgetreportPageRoutingModule {}
