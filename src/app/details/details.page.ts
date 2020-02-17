import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
import { RouterModule, Router, Routes, ActivatedRoute } from '@angular/router';
import { Platform } from '@ionic/angular';
import { ToastController, AlertController,LoadingController,NavController,MenuController } from '@ionic/angular';
@Component({
  selector: 'app-details',
  templateUrl: './details.page.html',
  styleUrls: ['./details.page.scss'],
})
export class DetailsPage implements OnInit {
token:any;
maintoken:any;
maindata:any;
list:any;
id:any;
passdata:any;
role:any
approver_role:any;
  constructor(public loadingcontroler: LoadingController, public platform: Platform, private route: ActivatedRoute, public navCtrl: NavController,private menuCtrl: MenuController,private apiService: ApiService,public toastController: ToastController,public routeCtrl: Router) { 
    this.platform.backButton.subscribe(() => {
      // this.navCtrl.navigateRoot(['approval']);
     
      this.navCtrl.pop();
    });
  }

  ngOnInit() {
    this.loadingcontroler.create({
      message:"Loading ..."
    }).then((load)=>{
      load.present()

      this.role=this.route.snapshot.paramMap.get("role");
      console.log(this.role)
       this.token=JSON.parse(localStorage.getItem('token'))   
       this.maintoken=this.token.token
       load.dismiss()
       if(this.role == "supervisor"){
         var formData = new FormData(); 
       formData.append('token', this.maintoken);   
       this.apiService.aprovesuper(formData).subscribe(data=>{ 
       console.log(data)
       this.maindata=data
       this.list=this.maindata.data
       console.log(this.list.length)
       if(this.list.length == 0){
         alert("No Pending Approval")
         this.routeCtrl.navigate(['approval']);
       }
       })
       
     }
     else if(this.role == "budget_owner"){
   
     var formData = new FormData(); 
       formData.append('token', this.maintoken);   
       this.apiService.approvebudgetowner(formData).subscribe(data=>{ 
       console.log(data)
       this.maindata=data
       this.list=this.maindata.data
       console.log(this.list.length)
       if(this.list.length == 0){
         alert("No Pending Approval")
         this.routeCtrl.navigate(['approval']);
       }
       })
     }
     else if(this.role == "cfo"){
       var formData = new FormData(); 
       formData.append('token', this.maintoken);   
       this.apiService.approvecfo(formData).subscribe(data=>{ 
       console.log(data)
       this.maindata=data
       this.list=this.maindata.data
       console.log(this.list.length)
       if(this.list.length == 0){
         alert("No Pending Approval")
         this.routeCtrl.navigate(['approval']);
       }
       })
   
     }
     else if(this.role == "cmd"){
       var formData = new FormData(); 
       formData.append('token', this.maintoken);   
       this.apiService.approvecmd(formData).subscribe(data=>{ 
       console.log(data)
       this.maindata=data
       this.list=this.maindata.data
       console.log(this.list.length)
       if(this.list.length == 0){
         alert("No Pending Approval")
         this.routeCtrl.navigate(['approval']);
       }
       })
   
     }
     else if(this.role == "finance"){
       var formData = new FormData(); 
       formData.append('token', this.maintoken);   
       this.apiService.approvefinance(formData).subscribe(data=>{ 
       console.log(data)
       this.maindata=data
       this.list=this.maindata.data
       console.log(this.list.length)
       if(this.list.length == 0){
         alert("No Pending Approval")
         this.routeCtrl.navigate(['approval']);
       }
       })
   
     }


    });


  


  // if(this.list.length == 0){
  //   alert("No pending Request Avialabel")
  // }
    
    
  }
  view(item){
    console.log(item.id)
    this.id=item.id
    this.approver_role=item.name
    this.routeCtrl.navigate(['/view',{id: this.id,approver_role: this.role}]);
   
  }

  edit(item){
    console.log(item.id)
    this.id=item.id
    this.routeCtrl.navigate(['/edit',{id: this.id}]);
  }
  back(){
    
  }

}
