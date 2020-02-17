import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { GroupgraphPageRoutingModule } from './groupgraph-routing.module';

import { GroupgraphPage } from './groupgraph.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    GroupgraphPageRoutingModule
  ],
  declarations: [GroupgraphPage]
})
export class GroupgraphPageModule {}
