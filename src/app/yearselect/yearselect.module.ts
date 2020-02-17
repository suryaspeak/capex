import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { YearselectPageRoutingModule } from './yearselect-routing.module';

import { YearselectPage } from './yearselect.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    YearselectPageRoutingModule
  ],
  declarations: [YearselectPage]
})
export class YearselectPageModule {}
