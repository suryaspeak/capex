import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
import { Platform } from '@ionic/angular';
import { ToastController, AlertController,LoadingController,NavController,MenuController } from '@ionic/angular';
@Component({
  selector: 'app-settings',
  templateUrl: './settings.page.html',
  styleUrls: ['./settings.page.scss'],
})
export class SettingsPage implements OnInit {
  mytextfield:any;
  password:any;
  token:any;
  maintoken:any;
  data:any;
  employename:any;
  email:any;
  constructor(public loadingcontroler: LoadingController,public platform: Platform,public navCtrl: NavController,private menuCtrl: MenuController,private apiService: ApiService,public toastController: ToastController) {
    this.platform.backButton.subscribe(() => {
      this.navCtrl.pop();
     
    });
   }

  ngOnInit() {
    // this.mytextfield.focus()
    this.token=JSON.parse(localStorage.getItem('token'))   
    this.maintoken=this.token.token
    console.log(this.maintoken)
    this.employename=this.token.user.name
    this.email=this.token.user.email
    console.log(this.employename)

  }
  submit(){

if(this.password){
  this.loadingcontroler.create({
    message:"Loading ..."
  }).then((load)=>{
   load.present()
   var formData = new FormData(); 
   formData.append('token', this.maintoken); 
   formData.append('password', this.password); 
   

   this.apiService.password(formData).subscribe(data=>{ 
   console.log(data)
  
   this.data=data
   load.dismiss()
   if(this.data.status == 'active'){
     alert("Your Password Has Been Changed Succesfully")
     this.navCtrl.navigateRoot(['login']);
   }
   else{
     alert("Sorry Some Thing Went Wrong Please Try Again")
   }
   
   })
  });

  
}
else{
  alert(" Mandatory fields Are Required To Fill")
}
  

  }

}
