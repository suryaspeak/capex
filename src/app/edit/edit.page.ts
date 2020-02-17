import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiService } from '../api.service';
import { PopoverController, AlertController,NavController } from '@ionic/angular';
@Component({
  selector: 'app-edit',
  templateUrl: './edit.page.html',
  styleUrls: ['./edit.page.scss'],
})
export class EditPage implements OnInit {
  maintoken:any;
  id:any;
 token:any;
 data:any;
 manufacturer:any;
 asset_name:any;
 budget_description:any;
 asset_quantity:any;
 asset_justification:any;
 approve:any;
 show:any=1;
 approve_amount:any;
 vender_name1:any;
 sap_vender_code1:any;
 vender_name2:any;
 sap_vender_code2:any;
 vender_name3:any;
 sap_vender_code4:any;
 sap_vender_code3:any;
 vender_name4:any;
 expected_date:any;
 supervisor_comment:any;
 date:any;
  constructor(public navCtrl:NavController,public alertController:AlertController,public popoverCtrl:PopoverController,private route: ActivatedRoute,public routeCtrl:Router,private apiService: ApiService) { }

  ngOnInit() {
    this.id=this.route.snapshot.paramMap.get("id");
    this.token=JSON.parse(localStorage.getItem('token'))
 
    this.maintoken=this.token.token
    console.log(this.maintoken)
    var formData = new FormData();
 
    formData.append('token', this.maintoken);
    formData.append('id', this.id)
 
    this.apiService.aproveviewdetails(formData).subscribe(data=>{
   console.log(data)
 this.data=data
 this.manufacturer=this.data.data.manufacturer
 this.asset_name=this.data.data.asset_name
 this.budget_description=this.data.data.budget_description
 this.asset_quantity=this.data.data.asset_quantity
 this.asset_justification=this.data.data.asset_justification
this.approve_amount=this.data.data.approve_amount

// this.date=new Date("2015-03-25");
// this.expected_date=this.date.toISOString(); 
//  console.log(this.expected_date)
this.expected_date=this.data.data.expected_date_iso
console.log(this.expected_date)

  

 
  
    })
  }
  change(){
    console.log(this.approve)
    if(this.approve == "yes"){
      this.show='1'
    }
    else if (this.approve == "no") {
      this.show='0'
      alert("Supervisor Comment is now mandatory")

    }
  }
  submit(){
 console.log(this.show)
//  if(  this.manufacturer=='undefined' &&  this.asset_name=='undefined' && this.budget_description=='undefined' && this.asset_justification=='undefined' &&
//   this.asset_quantity=='undefined' && this.supervisor_comment=='undefined' && this.approve=='undefined' )
//   {
//     alert("*Fields are mandatory to fill")
//   }
//   else{

//     console.log("work")
//   }
    if( this.show=='0'){


      if( this.manufacturer==undefined ||  this.asset_name==undefined || this.budget_description==undefined || this.asset_justification==undefined ||
      this.asset_quantity==undefined || this.supervisor_comment==undefined || this.approve==undefined)
        {
          alert("*Fields are mandatory to fill")
          
        }
        else{
          console.log("work approve no")
        }
        

    }
   
    else if(this.show=='1'){
      console.log(this.approve)
      if( this.manufacturer==undefined ||  this.asset_name==undefined || this.budget_description==undefined || this.asset_justification==undefined ||
      this.asset_quantity==undefined  || this.approve==undefined)
        {
          alert("* *Fields are mandatory to fill")
          
        }
        else{
          console.log("work approve yes")
        }
       
        
    
    }
    
    
    
  
    var strDate = this.expected_date;

var sendate=strDate.substring(0, 10);
    console.log(sendate)

    var formData = new FormData(); 
    formData.append('expected_date_iso',sendate)
    formData.append('manufacturer', this.manufacturer);  
    formData.append('asset_name', this.asset_name);   
    formData.append('budget_description', this.budget_description);   
    formData.append('asset_quantity', this.asset_quantity);   
    formData.append('asset_justification', this.asset_justification);   
    formData.append('approve_amount', this.approve_amount);   
    formData.append('vender_name1', this.vender_name1);   
    formData.append('sap_vender_code1', this.sap_vender_code1);   
    formData.append('vender_name2', this.vender_name2);   
    formData.append('sap_vender_code2', this.sap_vender_code2);   
    formData.append('sap_vender_code4', this.sap_vender_code4);
    formData.append('sap_vender_code3', this.sap_vender_code3);    

    formData.append('vender_name4', this.vender_name4);
    formData.append('approve', this.approve);    
    formData.append('supervisor_comment', this.supervisor_comment);        

    // this.apiService.aprovesuper(formData).subscribe(data=>{ 
    // console.log(data)
    
    // })
  }

}
