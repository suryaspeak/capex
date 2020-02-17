import { Component,ViewChild } from '@angular/core';
import { ApiService } from '../api.service';
import { Chart } from 'chart.js';
import { ToastController, AlertController,LoadingController,NavController,MenuController } from '@ionic/angular';
@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})

export class HomePage {
  canvas="#barCanvas";
  @ViewChild('barCanvas',{static:false}) barCanvas;
  
  barChart:any;
  gdata=[5, 4, 2, 9, 8, 7];
  menu:any;
  constructor(public navCtrl: NavController,private menuCtrl: MenuController,private apiService: ApiService,public toastController: ToastController) {
    this.menu=JSON.parse(localStorage.getItem('menu'))
    console.log(this.menu)
    this.menuCtrl.enable(true);
  }

 
}
