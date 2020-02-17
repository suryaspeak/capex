import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { NotdetailsPageRoutingModule } from './notdetails-routing.module';

import { NotdetailsPage } from './notdetails.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    NotdetailsPageRoutingModule
  ],
  declarations: [NotdetailsPage]
})
export class NotdetailsPageModule {}
