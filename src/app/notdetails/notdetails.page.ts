import { Component, OnInit } from '@angular/core';
import { RouterModule, Router, Routes, ActivatedRoute } from '@angular/router';
import { ToastController, AlertController,LoadingController,NavController,MenuController } from '@ionic/angular';
import { Platform } from '@ionic/angular';
@Component({
  selector: 'app-notdetails',
  templateUrl: './notdetails.page.html',
  styleUrls: ['./notdetails.page.scss'],
})
export class NotdetailsPage implements OnInit {
item:any;
message:any;
heading:any;
notification:any;
  constructor(public platform: Platform,private route: ActivatedRoute,public navCtrl: NavController,private menuCtrl: MenuController,public toastController: ToastController) { 
    this.platform.backButton.subscribe(() => {
      this.navCtrl.pop();
     
    });
  }

  ngOnInit() {
    this.item= this.route.snapshot.paramMap.get("role") ;
    this.notification=JSON.parse(this.item)
    console.log(this.notification)
    this.message=this.notification.message
    this.heading=this.notification.heading
  }

}
