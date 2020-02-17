import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { BudgetreportPageRoutingModule } from './budgetreport-routing.module';

import { BudgetreportPage } from './budgetreport.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    BudgetreportPageRoutingModule
  ],
  declarations: [BudgetreportPage]
})
export class BudgetreportPageModule {}
