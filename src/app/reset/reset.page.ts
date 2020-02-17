import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';

import { ToastController, AlertController,LoadingController,NavController,MenuController } from '@ionic/angular';

@Component({
  selector: 'app-reset',
  templateUrl: './reset.page.html',
  styleUrls: ['./reset.page.scss'],
})
export class ResetPage implements OnInit {
  user:any;
  data:any;
  constructor(public loadingcontroler: LoadingController, public navCtrl: NavController,private menuCtrl: MenuController,private apiService: ApiService,public toastController: ToastController) {
    this.menuCtrl.enable(false);
   }
   log(){
    this.loadingcontroler.create({
      message:"Loading ..."
    }).then((load)=>{
      load.present()
      console.log(this.user)
       
         var formData = new FormData();
     
         formData.append('username', this.user);
        
         this.apiService.reset(formData).subscribe(data=>{
        console.log(data)
        load.dismiss()
        console.log(data['status'])
        if(data['status'] == 'active'){
          alert(" Reset Password Successfully Please Check Your Mail For Temporarily Password")
          this.navCtrl.navigateRoot(['confirmpassword']);

        }
        else{
          alert("Some Thing Went Wrong Please Try Again")
          this.navCtrl.navigateRoot(['login']);
        }
   
    
         })
    })
         
       }

  ngOnInit() {
  }

}
