import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { GraphPage } from './graph/graph.page';
import { HTTP } from '@ionic-native/http/ngx';
import { HttpClientModule } from '@angular/common/http';
import { ModalpagePage } from './modalpage/modalpage.page';
import { AssetgroupPage } from './assetgroup/assetgroup.page';
import { PopoverComponent } from './popover/popover.component';
import { Modal2Page } from './modal2/modal2.page';
import { PiemodalComponent } from './piemodal/piemodal.component';

import { LineComponent } from './line/line.component';
import { FileTransfer, FileUploadOptions, FileTransferObject } from '@ionic-native/file-transfer/ngx';
import { ScreenOrientation } from '@ionic-native/screen-orientation/ngx';
import { File } from '@ionic-native/file/ngx';
import { FileOpener } from '@ionic-native/file-opener/ngx';
import { Keyboard } from '@ionic-native/keyboard/ngx';
import { DocumentViewer } from '@ionic-native/document-viewer/ngx';
@NgModule({
  declarations: [AppComponent,ModalpagePage,PopoverComponent,Modal2Page,PiemodalComponent,LineComponent,GraphPage,AssetgroupPage],
  entryComponents: [ModalpagePage,PopoverComponent,Modal2Page,PiemodalComponent,LineComponent,GraphPage,AssetgroupPage],
  imports: [
    BrowserModule,
    HttpClientModule,
    IonicModule.forRoot(),
    AppRoutingModule
  ],
  providers: [
    StatusBar,
    SplashScreen,
    ScreenOrientation,
    HTTP,
    File,
    FileTransfer,
    FileOpener,
    DocumentViewer,
    Keyboard,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
