import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';

import { ToastController, AlertController,LoadingController,NavController,MenuController } from '@ionic/angular';
@Component({
  selector: 'app-confirmpassword',
  templateUrl: './confirmpassword.page.html',
  styleUrls: ['./confirmpassword.page.scss'],
})
export class ConfirmpasswordPage implements OnInit {

  user:any;
  data:any;
  t_password:any;
  n_password:any;
  constructor(public loadingcontroler: LoadingController, public navCtrl: NavController,private menuCtrl: MenuController,private apiService: ApiService,public toastController: ToastController) {
    this.menuCtrl.enable(false);
   }
   log(){
     if(this.n_password){
      this.loadingcontroler.create({
        message:"Loading ..."
      }).then((load)=>{
        load.present()
        console.log(this.user)
         
           var formData = new FormData();
       
           formData.append('username', this.user);
           formData.append('oldpassword', this.t_password);
           formData.append('newpassword', this.n_password);
           
           
           this.apiService.change(formData).subscribe(data=>{
          console.log(data)
          load.dismiss()
          console.log(data['status'])
          if(data['status'] == 'active'){
            alert("Reset Password Successfully")
            this.navCtrl.navigateRoot(['login']);
  
          }
          else if(data['status'] == 'inactive'){
            alert("Old password and new password can't be same!")

          }
          else{
            alert("Some Thing Went Wrong Please Try Again")
            this.navCtrl.navigateRoot(['login']);
          }
     
      
           })
      })
     }
     else{
      alert("All Fields Are Mandatory")
     }
    
         
       }

  ngOnInit() {
  }

}
