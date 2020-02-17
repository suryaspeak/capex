import { Component, OnInit } from '@angular/core';
import { ModalController, PickerController } from '@ionic/angular';
import { GrpahmodalPage } from '../grpahmodal/grpahmodal.page';
import { ApiService } from '../api.service';

import { ToastController, AlertController,LoadingController,NavController,MenuController,PopoverController } from '@ionic/angular';
import {  } from '@ionic/angular';
import { ModalpagePage } from '../modalpage/modalpage.page';
import { PopoverComponent } from '../popover/popover.component';
import { ActivatedRoute, Router } from '@angular/router';
import { Modal2Page } from '../modal2/modal2.page';
import { PiemodalComponent } from '../piemodal/piemodal.component';
import { LineComponent } from '../line/line.component';
import { asLiteral } from '@angular/compiler/src/render3/view/util';
import { YoygroupComponent } from '../yoygroup/yoygroup.component';
import { GraphPage } from '../graph/graph.page';
import { AssetgroupPage } from '../assetgroup/assetgroup.page';
import { Platform } from '@ionic/angular';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.page.html',
  styleUrls: ['./landing.page.scss'],
})
export class LandingPage implements OnInit {
show:any;
dv:any;
token:any;
maintoken:any;
year:any;
data:any;
role:any;
list:any;
type:any;
num:any=1;
id:any;
name:any;
highh:any;
low:any;
  constructor(public loadingcontroler: LoadingController,public platform: Platform,public navCtrl: NavController,private menuCtrl: MenuController,private apiService: ApiService,public toastController: ToastController,public modalController: ModalController,public popoverController: PopoverController,private route: ActivatedRoute) {
  //   this.year=this.route.snapshot.paramMap.get("year");
  //   this.token=JSON.parse(localStorage.getItem('token'))   
  //   this.maintoken=this.token.token
  //   var formData = new FormData(); 
  //   formData.append('token', this.maintoken); 
  //   formData.append('id', this.num ); 
  //   formData.append('year',this.year)
  //   this.apiService.ytdGraph(formData).subscribe(data=>{ 
  //   console.log(data)
  //  this.data=data

    
  //   })
  this.platform.backButton.subscribe(() => {
    
    this.navCtrl.pop();
   
  });
  }

   
  async line(){
    const modal = await this.modalController.create({
      component: LineComponent,
      componentProps: { 
        componentProps: { id: this.id,year:this.year }
        
      }
  
      
       
    });
    return await modal.present();
   }
 async pie(){
  const modal = await this.modalController.create({
    component: PiemodalComponent,
    componentProps: { id: this.id,year:this.year }

    
     
  });
  return await modal.present();
 }
 async yoy(item){
  console.log(item)
  this.id=item.id
  this.name=item.asset_name
  const modal = await this.modalController.create({
    component: GraphPage,
    componentProps: { id: this.id,year:this.year,name:this.name,header:"YOY Budget Utilization For : " }

    
     
  });
  return await modal.present();
 }

 async ytdgraph(item){
   console.log(item)
   this.name=item.asset_name
   this.id=item.id
  const modal = await this.modalController.create({
    component: ModalpagePage,
    componentProps: { 'id': this.id ,"year":this.year,'name':this.name,"header":"YTD Budget Utilization For : " }

    
     
  });
  return await modal.present();
   
 }
 
 async assetpie(item){
  console.log(item)
  this.id=item.id
  this.name=item.asset_name
 const modal = await this.modalController.create({
   component: Modal2Page,
   componentProps: { 'id': this.id,'year':this.year,'type':this.type ,'name':this.name,"header":"SBU Wise Utilization For : " }

   
    
 });
 return await modal.present();
  
}

   async presentModal() {
    
  }
  

  
  ngOnInit() {
    this.loadingcontroler.create({
      message:"Loading ..."
    }).then((load)=>{
      load.present()
      this.year=this.route.snapshot.paramMap.get("year");
      this.role=this.route.snapshot.paramMap.get("role");
      this.type=this.route.snapshot.paramMap.get("type");
      
      this.token=JSON.parse(localStorage.getItem('token'))   
      this.maintoken=this.token.token
     
    if(this.role=="ytd"){
      
      this.dv=1
      console.log("sdggsdgsdg")
      var formData = new FormData(); 
      formData.append('token', this.maintoken); 
      formData.append('year', this.year); 
  
      this.apiService.ytdlist(formData).subscribe(data=>{ 
      console.log(data)
  
     this.data=data
     this.list=this.data.data.ytd_list
     console.log(this.list)
      
      })
    }

  else if(this.role== "yoy"){
   
    this.dv=2
    var formData = new FormData(); 
    formData.append('token', this.maintoken); 
    formData.append('year', this.year); 
   
    this.apiService.yoylist(formData).subscribe(data=>{ 
    console.log(data)
   this.data=data
   this.list=this.data.data.yoy_list
   console.log(this.list)
    
    })

  }
  else if(this.role== "asset"){
    console.log(this.role)
    console.log(this.type)
    this.dv=3
    var formData = new FormData(); 
    formData.append('token', this.maintoken); 
    formData.append('year', this.year); 
    formData.append('type',this.type)
   
    this.apiService.assetlist(formData).subscribe(data=>{ 
    console.log(data)
   
   this.data=data
   this.list=this.data.data.assetwise_list
   console.log(this.list)
    
    })

  }
  else if(this.role== "top"){
    this.dv=4
    var formData = new FormData(); 
    formData.append('token', this.maintoken); 
    formData.append('year', this.year); 

    this.apiService.Top5(formData).subscribe(data=>{ 
    console.log(data)
    
    this.data=data
    this.highh=this.data.data.high_utilization
    this.low=this.data.data.low_utilization
    
    })

  }
  load.dismiss()
    });
   




  
   
  


  }

 
  // ytdgraph(){
  //   this.navCtrl.navigateRoot(['graph']);
  // }
 assetgraph(){
if(this.type == "BC"){
  this.navCtrl.navigateRoot(['graph']);
}
else if(this.type == "SBU"){

  
  
 
}
else if(this.type == "Location"){
  this.line()
}

  
 }

  
 async assetline(item){
  console.log(item)
  this.id=item.id
  this.name=item.asset_name
 const modal = await this.modalController.create({
   component: LineComponent,
   componentProps: { 'id': this.id,'year':this.year,'type':this.type,'name':this.name,"header":"Location Wise Utilization For : "  }

   
    
 });
 return await modal.present();
  
}

async bc(item){
  console.log(item)
  this.id=item.id
  this.name=item.asset_name
 const modal = await this.modalController.create({
   component: AssetgroupPage,
   componentProps: { 'id': this.id,'year':this.year,'type':this.type,'name':this.name,"header":"Budget Combination Wise Utilization For : " }

   
    
 });
 return await modal.present();
  
}

  
 
}
// this.show=this.route.snapshot.paramMap.get("data");

    //  console.log(this.show)

    // if(this.show== "YTD"){
    // this.dv=1
    // }
    // else if (this.show== "YOY"){
    //   this.dv=2
    // }
    // else if (this.show== "Asset"){
    //   this.dv=3
    // }
    // else if (this.show== "Top"){
    //   this.dv=4
    // }