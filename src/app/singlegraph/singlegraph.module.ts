import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SinglegraphPageRoutingModule } from './singlegraph-routing.module';

import { SinglegraphPage } from './singlegraph.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SinglegraphPageRoutingModule
  ],
  declarations: [SinglegraphPage]
})
export class SinglegraphPageModule {}
