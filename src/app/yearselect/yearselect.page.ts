import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
import { RouterModule, Router, Routes, ActivatedRoute } from '@angular/router';
import { ToastController, AlertController,LoadingController,NavController,MenuController } from '@ionic/angular';
import { Platform } from '@ionic/angular';

@Component({
  selector: 'app-yearselect',
  templateUrl: './yearselect.page.html',
  styleUrls: ['./yearselect.page.scss'],
})
export class YearselectPage implements OnInit {
year:any;
slice:any;
role:any;
type:any;
token:any;
maintoken:any;
yeardata:any;
data:any;
  constructor(public routeCtrl: Router,public platform: Platform,private route: ActivatedRoute,public navCtrl: NavController,private menuCtrl: MenuController,private apiService: ApiService,public toastController: ToastController) {
    this.platform.backButton.subscribe(() => {
    
      this.navCtrl.pop();
     
    });
    this.token=JSON.parse(localStorage.getItem('token'))   
 
    this.maintoken=this.token.token
    console.log(this.maintoken)
    var formDataa = new FormData(); 

    formDataa.append('token', this.maintoken);   
    this.apiService.year(formDataa).subscribe(data=>{ 
    console.log(data)
    this.data=data
    this.yeardata=this.data.data
    console.log(this.yeardata)
 

  });
   }


  ngOnInit() {
    this.role=this.route.snapshot.paramMap.get("role");
    console.log(this.role)
  }
  submit(){
    console.log(this.role)
    if(this.role == 'asset'){
    console.log("w")
    if(this.year && this.type){
      this.slice=this.year.slice(0,4)
      this.routeCtrl.navigate(['landing',{year: this.slice,role: this.role,type:this.type}]);
    }
    else{
    alert( "Mandatory Fields are Required To Fill") 
    }


    }
     else{
       if(this.year){
        this.slice=this.year.slice(0,4)
        this.routeCtrl.navigate(['landing',{year: this.slice,role: this.role,type:this.type}]);
       }
       else{
         alert("Mandatory Fields are Required To Fill")
        
      }
     }
   
  }
}
