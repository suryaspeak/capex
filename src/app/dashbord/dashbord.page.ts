import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
import { RouterModule, Router, Routes, ActivatedRoute } from '@angular/router';
import { ToastController, AlertController,LoadingController,NavController,MenuController } from '@ionic/angular';
import { Platform } from '@ionic/angular';
@Component({
  selector: 'app-dashbord',
  templateUrl: './dashbord.page.html',
  styleUrls: ['./dashbord.page.scss'],
})
export class DashbordPage implements OnInit {
token:any;
maintoken:any;
data:any;
info:any;
my_capex_approve:any;
my_capex_fail:any;
my_capex_rejected:any;
my_capex_request:any;
count:any;
menu:any;
employename:any;
roledata:any;
notice_count:any;
notice_data:any;

  constructor(public alertController:AlertController, public platform: Platform,public loadingcontroler: LoadingController,public routeCtrl: Router,public navCtrl: NavController,private menuCtrl: MenuController,private apiService: ApiService,public toastController: ToastController) {
    this.menuCtrl.enable(true);

    




    this.menu=JSON.parse(localStorage.getItem('menu'))
    console.log(this.menu)
    this.token=JSON.parse(localStorage.getItem('token'))   
    this.employename=this.token.user.name
    console.log(this.employename)
    this.maintoken=this.token.token





    this.loadingcontroler.create({
      message:"Loading ..."
    }).then((load)=>{
      load.present()
    
      
      var formData = new FormData(); 
      formData.append('token', this.maintoken);   
      this.apiService.dashboard(formData).subscribe(data=>{ 
      console.log(data)
      load.dismiss()
      this.data=data
      this.info=this.data.data
      this.count=this.info.count
     
  
   
  
      })


    });






    var formDataa = new FormData(); 
    formDataa.append('token', this.maintoken);   
    this.apiService.notice(formDataa).subscribe(data=>{ 
    console.log(data)
    this.notice_data=data
    this.notice_count=this.notice_data.notification_count
     console.log(this.notice_count)
   

 

    })











    setInterval(() => { 
      this.notificatoncount(); // Now the "this" still references the component
   }, 100000);
   }

  ngOnInit() {
    
    this.platform.backButton.subscribe(() => {
    
       if(window.location.pathname=="/dashbord"){
        
      
        this.submitExit()
       }
       else{
         console.log("work")
       }
       
       
      });
  }
  
  notificatoncount(){
    var formDataa = new FormData(); 
    formDataa.append('token', this.maintoken);   
    this.apiService.notice(formDataa).subscribe(data=>{ 
    console.log(data)
    this.notice_data=data
    this.notice_count=this.notice_data.notification_count
     console.log(this.notice_count)
   

 

    })
  }
  notif(){
    
    this.routeCtrl.navigate(['notification']);
  }
  yearYTD(){
    console.log("year")
    this.routeCtrl.navigate(['yearselect',{role: "ytd"}]);
  }
  yearYOY(){
    this.routeCtrl.navigate(['yearselect',{role: "yoy"}]);
  }
  yearasset(){
    this.routeCtrl.navigate(['yearselect',{role: "asset"}]);
  }
  yeartop(){
    this.routeCtrl.navigate(['yearselect',{role: "top"}]);
    // this.routeCtrl.navigate(['top']);
  }
  budgetactual(){
    this.routeCtrl.navigate(['reports']);
  }
  budgetreport(){
    this.routeCtrl.navigate(['budgetreport']);
  }


//   setInterval(notificatoncount(){ alert("Hello"); }, 3000);


//  setInterval(this.notificatoncount()) { 
//   this.notificatoncount(); // Now the "this" still references the component
// }, 3000);

async submitExit(){
  
//   var alert;
//   alert =  this.alertcontroller.create({
//    header: "Exit App?",
//    cssClass: "myAlert",
//    message: "DO YOU REALLY WANT TO Exit?",
//    buttons: [{
//      text: 'NO',
//      // role: 'cancel',
//      cssClass: 'myAlert',
//      handler: () => { 
       
//       }
//    },
//    {
//      text: 'YES',
//      handler: () => {
//        navigator['app'].exitApp();
    
//      }


//    }]

//  });

//  alert.present();
const alert = await this.alertController.create({
  header: "Exit App ?",
  message: 'DO YOU REALLY WANT TO Exit?',
  buttons: [
    {
      text: 'Cancel',
      role: 'cancel',
      cssClass: 'secondary',
      handler: (blah) => {
        console.log('Confirm Cancel: blah');
      }
    }, {
      text: 'Okay',
      handler: () => {
        navigator['app'].exitApp();
      }
    }
  ]
});

await alert.present();

}

async presentAlertConfirm() {
  const alert = await this.alertController.create({
    header: 'Confirm!',
    message: 'Message <strong>text</strong>!!!',
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
        }
      }
    ]
  });

  await alert.present();
}


sync(){

  this.loadingcontroler.create({
    message:"Refreshing Data..."
  }).then((load)=>{
    load.present()
  
    
    var formData = new FormData(); 
    formData.append('token', this.maintoken);   
    this.apiService.dashboard(formData).subscribe(data=>{ 
    console.log(data)
    load.dismiss()
    this.data=data
    this.info=this.data.data
    this.count=this.info.count
   

 

    })


  });






  var formDataa = new FormData(); 
  formDataa.append('token', this.maintoken);   
  this.apiService.notice(formDataa).subscribe(data=>{ 
  console.log(data)
  this.notice_data=data
  this.notice_count=this.notice_data.notification_count
   console.log(this.notice_count)
 



  })

}





}
