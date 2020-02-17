import { Component } from '@angular/core';

import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import {  NavController,AlertController } from '@ionic/angular';
import { ScreenOrientation } from '@ionic-native/screen-orientation/ngx';
import { RouterModule, Router, Routes, ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss']
})
export class AppComponent {
  public appPages = [
    // {
    //   title: 'Dashbord',
    //   url: '/landinglayer',
    //   icon: 'trending-up'
    // },
    {
      title: 'Home',
      url: '/dashbord',
      icon: 'home'
    },
    {
      title: ' Pending Approval List',
      url: 'approval',
      icon: 'checkmark'
      
    },
   
    {
      title: 'Settings',
      url: '/settings',
      icon: 'settings'
    },

    
  ];
  menu:any;
  show:any=0;
  user_role:any;
  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar,
    public navCtrl:NavController,
    public routeCtrl: Router,
    public alertController:AlertController
  ) {
    // this.menu=JSON.parse(localStorage.getItem('menu'))
    // console.log(this.menu)
    // for(let i=0;i<this.menu.length;i++){
    //   if(this.menu[i].name == 'cfo' || this.menu[i].name == 'cmd'){
      
    //     this.user_role=this.menu[i].name
    //     break
        
    //   }
    //   else{
       
    //   }
    // }
    //  if(this.user_role== 'cfo' || this.user_role=='cmd'){
    //   this.show=1
    //  }
    //  else{
    //    this.show=0
    //  }
    this.initializeApp();
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.navCtrl.navigateRoot(['login']);
      this.statusBar.styleDefault();
      // this.splashScreen.hide();
      setTimeout(() => {
        this.splashScreen.hide();
    }, 1000);
    });
  }
  async logout(){
    const alert = await this.alertController.create({
      header: 'Log Out?',
      message: 'Do You really Want To Logout?',
      buttons: [
        {
          text: 'NO',
          role: 'cancel',
          cssClass: 'secondary',
          handler: (blah) => {
            console.log('Confirm Cancel: blah');
          }
        }, {
          text: 'Yes',
          handler: () => {
            console.log('Confirm Okay');
            localStorage.clear()
            this.navCtrl.navigateRoot(['login']);
          }
        }
      ]
    });
  
    await alert.present();
    
  }
  go(p){
    this.routeCtrl.navigate([p.url]);
  }
 
}
