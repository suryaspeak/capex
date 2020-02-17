import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
import { Platform } from '@ionic/angular';
import { ToastController, AlertController,LoadingController,NavController,MenuController } from '@ionic/angular';
import { RouterModule, Router, Routes, ActivatedRoute } from '@angular/router';
import { Keyboard } from '@ionic-native/keyboard/ngx';
@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
user:any;
pass:any;
menu:any;
role:any;
token:any;
show:any=1;
  constructor(private Keyboard: Keyboard,public platform: Platform,public routeCtrl: Router,public loadingcontroler: LoadingController, public navCtrl: NavController,private menuCtrl: MenuController,private apiService: ApiService,public toastController: ToastController) {
    this.menuCtrl.enable(false);
 
 this.Keyboard.disableScroll(true);
 
 
 
 
 
  }

  ngOnInit() {
    this.platform.backButton.subscribe(() => {
    
      if(window.location.pathname=="/login"){
       
        navigator['app'].exitApp();
      }
      else{
        console.log("work")
      }
      
      
     });
  }

  log(){
this.loadingcontroler.create({
  message:"Loading ..."
}).then((load)=>{
  load.present()
  console.log(this.user)
     console.log(this.pass)
     var formData = new FormData();
 
     formData.append('username', this.user);
     formData.append('password', this.pass);
     this.apiService.register(formData).subscribe(data=>{
    console.log(data['status'])
    console.log(data['msg'])
     load.dismiss()
    if(data['status'] == 'active'){
   
      this.menu=data
      this.role= this.menu.data.roles
      this.token=this.menu.data
     localStorage.setItem('menu',JSON.stringify(this.role) )  
     localStorage.setItem('token',JSON.stringify(this.token ) )  
      console.log(this.token)
 
 this.navCtrl.navigateRoot(['dashbord']);
 this.sucess() 
    }


else if(data['status'] == 'new'){
  this.navCtrl.navigateRoot(['confirmpassword']);

}

    else{
      alert(data['msg'])
    }

     })
})
     
   }
   async sucess() {
    const toast = await this.toastController.create({
      message:"Log In Sucessfully",
      duration: 300,
      position:"bottom"
    });
    toast.present();
  }


  reset(){
    this.routeCtrl.navigate(['reset']);
  }
  myFunction(){
    console.log("work")
  }
  focus(){
    console.log("work")
    this.show=0
  }
  blur(){
    console.log("work")
    this.show=1
  }
}
