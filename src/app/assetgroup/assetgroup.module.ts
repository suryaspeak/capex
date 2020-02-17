import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AssetgroupPageRoutingModule } from './assetgroup-routing.module';

import { AssetgroupPage } from './assetgroup.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AssetgroupPageRoutingModule
  ],
  declarations: [AssetgroupPage]
})
export class AssetgroupPageModule {}
