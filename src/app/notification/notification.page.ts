import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
import { Platform } from '@ionic/angular';
import { ToastController, AlertController,LoadingController,NavController,MenuController } from '@ionic/angular';
import { RouterModule, Router, Routes, ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-notification',
  templateUrl: './notification.page.html',
  styleUrls: ['./notification.page.scss'],
})
export class NotificationPage implements OnInit {
menu:any;
token:any;
maintoken:any;
notice:any;
list:any;
item:any;
  constructor(public loadingcontroler: LoadingController,public routeCtrl: Router,public platform: Platform,public navCtrl: NavController,private menuCtrl: MenuController,private apiService: ApiService,public toastController: ToastController) {
    this.platform.backButton.subscribe(() => {
      this.navCtrl.pop();
     
    });
   }

  ngOnInit() {

    this.loadingcontroler.create({
      message:"Loading ..."
    }).then((load)=>{
     load.present()
    this.menu=JSON.parse(localStorage.getItem('menu'))
    console.log(this.menu)
    this.token=JSON.parse(localStorage.getItem('token'))   
    this.maintoken=this.token.token
    var formDataa = new FormData(); 
    formDataa.append('token', this.maintoken);   
    this.apiService.notice(formDataa).subscribe(data=>{ 
    console.log(data)
    load.dismiss()
    this.notice=data
    this.list=this.notice.notification
   console.log(this.list)

 

    })
    })



  }
  details(item){
    console.log(item)
    this.item=item
    this.routeCtrl.navigate(['notdetails',{role:JSON.stringify(this.item)   }]);
  }
}
