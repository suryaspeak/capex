import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { LandinglayerPageRoutingModule } from './landinglayer-routing.module';

import { LandinglayerPage } from './landinglayer.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    LandinglayerPageRoutingModule
  ],
  declarations: [LandinglayerPage]
})
export class LandinglayerPageModule {}
