import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { GrpahmodalPageRoutingModule } from './grpahmodal-routing.module';

import { GrpahmodalPage } from './grpahmodal.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    GrpahmodalPageRoutingModule
  ],
  declarations: [GrpahmodalPage]
})
export class GrpahmodalPageModule {}
