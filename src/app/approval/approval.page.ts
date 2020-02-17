import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
import { Platform } from '@ionic/angular';
import { ToastController, AlertController,LoadingController,NavController,MenuController } from '@ionic/angular';
import { RouterModule, Router, Routes, ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-approval',
  templateUrl: './approval.page.html',
  styleUrls: ['./approval.page.scss'],
})
export class ApprovalPage implements OnInit {
menu:any;
role:any;
  constructor(public routeCtrl: Router, public platform: Platform,public navCtrl: NavController,private menuCtrl: MenuController,private apiService: ApiService,public toastController: ToastController) {
    this.menu=JSON.parse(localStorage.getItem('menu'))
    console.log(this.menu)
    this.platform.backButton.subscribe(() => {
     
     if(window.location.pathname=="/approval"){
      // this.navCtrl.navigateRoot(['dashbord']);
     }
     else{
       console.log("work")
     }
      // this.navCtrl.navigateRoot(['dashbord']);
     
    });
   }

  ngOnInit() {
  }
  view(item){
 console.log(item)
 this.role=item.name

 this.routeCtrl.navigate(['details',{role: this.role}]);
  }
  back(){
    this.navCtrl.pop();
  }
  
}
