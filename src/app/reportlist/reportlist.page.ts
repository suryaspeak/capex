import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
import { RouterModule, Router, Routes, ActivatedRoute } from '@angular/router';
import { ToastController, AlertController,LoadingController,NavController,MenuController } from '@ionic/angular';
@Component({
  selector: 'app-reportlist',
  templateUrl: './reportlist.page.html',
  styleUrls: ['./reportlist.page.scss'],
})
export class ReportlistPage implements OnInit {
menu:any;
user_role:any;
  constructor(public routeCtrl: Router,public navCtrl: NavController,private menuCtrl: MenuController,private apiService: ApiService,public toastController: ToastController) { }

  ngOnInit() {
    this.menu=JSON.parse(localStorage.getItem('menu'))
    console.log(this.menu)
    for(let i=0;i<this.menu.length;i++){
      if(this.menu[i].name == 'cfo' || this.menu[i].name == 'cmd'){
      
        this.user_role=this.menu[i].name
        break
        
      }
      else{
       
      }
    }
    console.log( this.user_role)
     if(this.user_role== 'cfo' || this.user_role=='cmd'){
      
     }
     else{
       alert("You Don't Have Permission To View Report")
       this.routeCtrl.navigate(['dashbord']);
     }

  }


  budgetactual(){
    this.routeCtrl.navigate(['reports']);
  }
  budgetreport(){
    this.routeCtrl.navigate(['budgetreport']);
  }

}
