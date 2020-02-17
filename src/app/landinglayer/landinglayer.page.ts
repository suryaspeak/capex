import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
import { Platform } from '@ionic/angular';
import { RouterModule, Router, Routes, ActivatedRoute } from '@angular/router';
import { ToastController, AlertController,LoadingController,NavController,MenuController } from '@ionic/angular';
@Component({
  selector: 'app-landinglayer',
  templateUrl: './landinglayer.page.html',
  styleUrls: ['./landinglayer.page.scss'],
})
export class LandinglayerPage implements OnInit {
  year:any;
  token:any;
  maintoken:any;
  
  list:any;
  data:any;
  constructor(public platform: Platform, private route: ActivatedRoute,public navCtrl: NavController,private menuCtrl: MenuController,private apiService: ApiService,public toastController: ToastController,public routeCtrl: Router) { 
    this.platform.backButton.subscribe(() => {
      this.navCtrl.pop();
     
    });
  }

  ngOnInit() {
    this.year=this.route.snapshot.paramMap.get("year");
   console.log(this.year)
    this.token=JSON.parse(localStorage.getItem('token'))   
    this.maintoken=this.token.token
    var formData = new FormData(); 
    formData.append('token', this.maintoken); 
    formData.append('year', this.year); 

    this.apiService.ytdlist(formData).subscribe(data=>{ 
    console.log(data)
   this.data=data
   this.list=this.data.data.bw_ytd_list
   console.log(this.list)
    
    })


  }
  // view(){
  //   this.routeCtrl.navigate(['/landing',{data: "YTD"}]);
  // }
  // view2(){
  //   this.routeCtrl.navigate(['/landing',{data: "YOY"}]);
  // }
  // view3(){
  //   this.routeCtrl.navigate(['/landing',{data: "Asset"}]);
  // }
  // view4(){
  //   this.routeCtrl.navigate(['/landing',{data: "Top"}]);
  // }
}