import { Component, OnInit } from '@angular/core';
import { ModalController, PickerController } from '@ionic/angular';
import { GrpahmodalPage } from '../grpahmodal/grpahmodal.page';
import { ApiService } from '../api.service';
import { Platform } from '@ionic/angular';
import { ToastController, AlertController,LoadingController,NavController,MenuController,PopoverController } from '@ionic/angular';
@Component({
  selector: 'app-top',
  templateUrl: './top.page.html',
  styleUrls: ['./top.page.scss'],
})
export class TopPage implements OnInit {
token:any;
maintoken:any;
data:any;
highh:any;
low:any;
  constructor(public loadingcontroler: LoadingController,public platform: Platform,public navCtrl: NavController,private menuCtrl: MenuController,private apiService: ApiService,public toastController: ToastController,public modalController: ModalController,public popoverController: PopoverController) {
    this.platform.backButton.subscribe(() => {
      this.back()
     
    });
   }

  ngOnInit() {
    
    this.loadingcontroler.create({
      message:"Loading ..."
    }).then((load)=>{
     load.present()
     this.token=JSON.parse(localStorage.getItem('token'))   
     this.maintoken=this.token.token
     var formData = new FormData(); 
     formData.append('token', this.maintoken); 
     
 
     this.apiService.Top5(formData).subscribe(data=>{ 
     console.log(data)
     load.dismiss()
    this.data=data
    this.highh=this.data.data.high_utilization
    this.low=this.data.data.low_utilization
   //  this.list=this.data.data.assetwise_list
   //  console.log(this.list)
     
     })
    })

   
  }
back(){
  this.navCtrl.pop();
}
}
