import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiService } from '../api.service';
import { PopoverController, AlertController,NavController,LoadingController } from '@ionic/angular';
import { isNgTemplate } from '@angular/compiler';
import { not } from '@angular/compiler/src/output/output_ast';
import { FileTransfer, FileUploadOptions, FileTransferObject } from '@ionic-native/file-transfer/ngx';
import { File } from '@ionic-native/file/ngx';
import { Platform } from '@ionic/angular';
import { FileOpener } from '@ionic-native/file-opener/ngx';
import { DocumentViewer,DocumentViewerOptions } from '@ionic-native/document-viewer/ngx';
@Component({
  selector: 'app-view',
  templateUrl: './view.page.html',
  styleUrls: ['./view.page.scss'],
})
export class ViewPage implements OnInit {
  options:any;
data:any;
main:any;
maintoken:any;
token:any;
id:any;
Company_code
Employee_code
Employee_Name
Grade
SBU
Designation
Broad_Function
Location
Plant
Supervisor_Name
Territory
Cost_Centre
Capex_Request_No
Budget_Type
Manufacturer
Quantity
Contact_Person
Total_Budget
Budget_Consumed
Remaining_Budget
Non_Budgeted_Budget_Owner_Comment
Budgeted_CFO_Comment
Capex_Requested_Date
Expected_Date
Description_Specification
Cost_of_Procurement
Supervisor_Comment
CFO_Comment
Sanction_No
Asset_No
Non_Budgeted_Supervisor_Comment
vender_name4
Asset_Group
Asset_Type
Asset_Name
Justification
Budget_Owner_Comment
Budget_Approve_For
Status
Failed_Reason
created_at
asset_description
asset_justification
asset_quantity
vender_name1
vender_name2
vender_name3
approve_amount
sap_vender_code1
sap_vender_code2
sap_vender_code3
menu:any;
approver_role:any;
comment:any;
dataa:any;
status:any;
budget_amount:any;
quotation:any;
average_value_same_asset:any;
total_capex_request_by_emp_no:any;
remaining_budget:any;
name:any;
sap_vender_code4:any;
non_budgeted_user_comment:any;
non_budgeted_cfo_comment:any;
budget_type:any;
noncomment:any;
view:any;
file_type:any;
 fileTransfer: FileTransferObject = this.transfer.create();
  constructor(private document: DocumentViewer,public loadingcontroler: LoadingController,private fileOpener: FileOpener,public platform: Platform,private transfer: FileTransfer, private file: File, public navCtrl:NavController,public alertController:AlertController,public popoverCtrl:PopoverController,private route: ActivatedRoute,public routeCtrl:Router,private apiService: ApiService) {
    this.platform.backButton.subscribe(() => {
      this.navCtrl.pop();
     
    });
   }
  
  ngOnInit() {
   
    // var accItem = document.getElementsByClassName('accordionItem');
    // var accHD = document.getElementsByClassName('accordionItemHeading');
    // for ( let i = 0; i < accHD.length; i++) {
    //     accHD[i].addEventListener('click', toggleItem, false);
    // }
    // function toggleItem() {
    //     var itemClass = this.parentNode.className;
    //     for (let j = 0; j < accItem.length; j++) {
    //         accItem[j].className = 'accordionItem close';
    //     }
    //     if (itemClass == 'accordionItem close') {
    //         this.parentNode.className = 'accordionItem open';
    //     }
    // }

    var accItem = document.getElementsByClassName('accordionItem');
    var accHD = document.getElementsByClassName('accordionItemHeading');
    for ( let i = 0; i < accHD.length; i++) {
        accHD[i].addEventListener('click', toggleItem);
    }
    function toggleItem() {
      console.log("sdf")
  
        var itemClass = this.parentNode.className;
        for (let j = 0; j < accItem.length; j++) {
          
            accItem[j].className = 'accordionItem close';
        }
        console.log(itemClass)
        if (itemClass == "accordionItem close") {
          console.log("2")
            this.parentNode.className = 'accordionItem open';
        }
        else if(itemClass == "accordionItem open"){
          console.log("4")
          this.parentNode.className = 'accordionItem close';
        }
        else{
          console.log("3")
          this.parentNode.className = 'accordionItem open';
        }
    }
    this.loadingcontroler.create({
      message:"Loading ..."
    }).then((load)=>{
     load.present()
     this.id=this.route.snapshot.paramMap.get("id");
     this.approver_role=this.route.snapshot.paramMap.get("approver_role");
     
    console.log( this.approver_role)
     console.log(this.id)
     this.token=JSON.parse(localStorage.getItem('token'))
     this.menu=JSON.parse(localStorage.getItem('menu'))
 
     console.log(this.token)
     console.log(this.menu)
 
 console.log(this.menu)
     this.maintoken=this.token.token
     console.log(this.maintoken)
     var formData = new FormData();
  
     formData.append('token', this.maintoken);
     formData.append('id', this.id)
  
     this.apiService.aproveviewdetails(formData).subscribe(data=>{
    console.log(data)
    load.dismiss()
  this.data=data
  this.main=this.data.data
  this.Company_code=this.main.compcode
  this.Employee_code=this.main.emp_no
 
  this.Employee_Name=this.main.name
 
  this.Grade=this.main.grade
  this.SBU=this.main.sbu
 
  this.Designation=this.main.desg
  this.Broad_Function=this.main.b_func
 
  this.Location=this.main.location
 
  this.Plant=this.main.plant_name
 
  this.Supervisor_Name=this.main.supervisor_name
 this.id=this.main.id
  this.Territory=this.main.territory
 
  this.Cost_Centre=this.main.costcentre
  this.Capex_Request_No=this.main.capex_no
 
  this.Budget_Type=this.main.budget_type_name
 this.quotation=this.main.quotation
 this.Manufacturer=this.main.manufacturer
 this.Quantity=this.main.asset_quantity
 this.Contact_Person=this.main.contact_person
 this.Total_Budget=this.main.Total_Budget
 this.Budget_Consumed=this.main.budget_consumed_amount
 this.Remaining_Budget=this.main.remaining_budget
 
 this.Non_Budgeted_Budget_Owner_Comment=this.main.non_budgeted_budgetowner_comment
 this.Budgeted_CFO_Comment=this.main.cfo_comment
 
 this.Capex_Requested_Date=this.main.created_at
 
 this.Expected_Date=this.main.expected_date
 
 this.Description_Specification=this.main.Description_Specification
 this.Cost_of_Procurement=this.main.approve_amount
 this.Supervisor_Comment=this.main.supervisor_comment
 
 this.CFO_Comment=this.main.cfo_comment
 
 this.Sanction_No=this.main.sanction_no
 
 this.Asset_No=this.main.asset_no
 this.Non_Budgeted_Supervisor_Comment=this.main.non_budgeted_supervisor_comment
 
 this.Asset_Group=this.main.asset_group_name
 
 this.Asset_Type=this.main.asset_type_name
 
 this.Asset_Name=this.main.asset_name
 
 this.Justification=this.asset_justification
 this.Budget_Owner_Comment=this.main.budget_owner_comment
 this.Budget_Approve_For=this.main.Budget_Approve_For
 this.Status=this.main.status
 this.Failed_Reason=this.main.failed_txt
 this.created_at=this.main.created_at
 this.asset_justification=this.main.asset_justification
 this.asset_description=this.main.asset_description
 this.asset_quantity=this.main.asset_quantity
 this.approve_amount=this.main.approve_amount
 this.vender_name1=this.main.vender_name1
 this.sap_vender_code1=this.main.sap_vender_code1
 this.vender_name2=this.main.vender_name2
 this.sap_vender_code2=this.main.sap_vender_code2
 this.vender_name3=this.main.vender_name3
 this.sap_vender_code3=this.main.sap_vender_code3
 this.budget_amount=this.main.budget_amount
 this.total_capex_request_by_emp_no=this.main.total_capex_request_by_emp_no
 this.average_value_same_asset=this.main.average_value_same_asset
 this.remaining_budget=this.main.remaining_budget
 this.name=this.main.name
 this.vender_name4=this.main.vender_name4
 this.sap_vender_code4=this.main.sap_vender_code4
 this.non_budgeted_user_comment=this.main.non_budgeted_user_comment
 this.non_budgeted_cfo_comment=this.main.non_budgeted_cfo_comment
 this.budget_type=this.main.budget_type
     console.log(this.main)
 
  
   
     })
    })
    
   
  }
  // ngAfterViewInit() {
  //   var accItem = document.getElementsByClassName('accordionItem');
  //   var accHD = document.getElementsByClassName('accordionItemHeading');
  //   for ( var i = 0; i < accHD.length; i++) {
  //       accHD[i].addEventListener('click', toggleItem, false);
  //   }
  //   function toggleItem() {
  //       var itemClass = this.parentNode.className;
  //       for (i = 0; i < accItem.length; i++) {
  //           accItem[i].className = 'accordionItem close';
  //       }
  //       if (itemClass == 'accordionItem close') {
  //           this.parentNode.className = 'accordionItem open';
  //       }
  //   }
  // }
  approve(){
console.log(this.approver_role)
this.loadingcontroler.create({
  message:"Loading ..."
}).then((load)=>{
 load.present()
 if(this.approver_role == "cmd"){

  if(this.approver_role == "supervisor"){
    console.log("Work")
       var formData = new FormData();
  
       formData.append('token', this.maintoken);
       formData.append('id', this.id)
       formData.append('approve', "Yes")
       formData.append('supervisor_comment',this.comment)
 
       this.apiService.superaprove(formData).subscribe(data=>{ 
         console.log(data)
         this.dataa=data
         this.status=this.dataa.status
         if(this.status == "save"){
           alert("You Have Successfully Approved The Request")
           this.routeCtrl.navigate(['approval']);
         }
         else{
           alert("Sorry Some Thing Went Wrong Pleace Try Again")
         }
         
 
        
         })
     }
     else if(this.approver_role == "budget_owner"){
       var formData = new FormData();
  
       formData.append('token', this.maintoken);
       formData.append('id', this.id)
       formData.append('approve', "Yes")
       formData.append('budget_owner_comment',this.comment)
 
       this.apiService.budgetownerapprove(formData).subscribe(data=>{ 
         console.log(data)
         this.dataa=data
         this.status=this.dataa.status
         if(this.status == "save"){
           alert("You Have Successfully Approved The Request")
           this.routeCtrl.navigate(['approval']);
         }
         else{
           alert("Sorry Some Thing Went Wrong Pleace Try Again")
         }
         })
     }
     else if(this.approver_role == "cfo"){
       var formData = new FormData();
  
       formData.append('token', this.maintoken);
       formData.append('id', this.id)
       formData.append('approve', "Yes")
       formData.append('cfo_comment',this.comment)
 
       this.apiService.cfoapprove(formData).subscribe(data=>{ 
         console.log(data)
         this.dataa=data
         this.status=this.dataa.status
         if(this.status == "save"){
           alert("You Have Successfully Approved The Request")
           this.routeCtrl.navigate(['approval']);
         }
         else{
           alert("Sorry Some Thing Went Wrong Pleace Try Again")
         }
         })
     }
     else if(this.approver_role == "cmd"){
       var formData = new FormData();
  
       formData.append('token', this.maintoken);
       formData.append('id', this.id)
       formData.append('approve', "Yes")
       formData.append('cmd_comment',this.comment)
 
       this.apiService.cmdapprove(formData).subscribe(data=>{ 
         console.log(data)
         this.dataa=data
         this.status=this.dataa.status
         if(this.status == "save"){
           alert("You Have Successfully Approved The Request")
           this.routeCtrl.navigate(['approval']);
         }
         else{
           alert("Sorry Some Thing Went Wrong Pleace Try Again")
         }
         })
     }

}
if(this.approver_role !== "cmd"){
  
  if(this.budget_type =='2'){
    if(this.noncomment  ){
     if(this.approver_role == "supervisor"){
       console.log("Work")
          var formData = new FormData();
     
          formData.append('token', this.maintoken);
          formData.append('id', this.id)
          formData.append('approve', "Yes")
          formData.append('supervisor_comment',this.comment)
          formData.append('non_budgeted_supervisor_comment',this.noncomment)
   
          
    
          this.apiService.superaprove(formData).subscribe(data=>{ 
            console.log(data)
            this.dataa=data
            this.status=this.dataa.status
            if(this.status == "save"){
              alert("You Have Successfully Approved The Request")
              this.routeCtrl.navigate(['approval']);
            }
            else{
              alert("Sorry Some Thing Went Wrong Pleace Try Again")
            }
            
    
           
            })
        }
        else if(this.approver_role == "budget_owner"){
          var formData = new FormData();
     
          formData.append('token', this.maintoken);
          formData.append('id', this.id)
          formData.append('approve', "Yes")
          formData.append('budget_owner_comment',this.comment)
          formData.append('non_budgeted_budgetowner_comment',this.noncomment)
          this.apiService.budgetownerapprove(formData).subscribe(data=>{ 
            console.log(data)
            this.dataa=data
            this.status=this.dataa.status
            if(this.status == "save"){
              alert("You Have Successfully Approved The Request")
              this.routeCtrl.navigate(['approval']);
            }
            else{
              alert("Sorry Some Thing Went Wrong Pleace Try Again")
            }
            })
        }
        else if(this.approver_role == "cfo"){
          var formData = new FormData();
     
          formData.append('token', this.maintoken);
          formData.append('id', this.id)
          formData.append('approve', "Yes")
          formData.append('cfo_comment',this.comment)
          formData.append('non_budgeted_cfo_comment',this.noncomment)
         
          this.apiService.cfoapprove(formData).subscribe(data=>{ 
            console.log(data)
            this.dataa=data
            this.status=this.dataa.status
            if(this.status == "save"){
              alert("You Have Successfully Approved The Request")
              this.routeCtrl.navigate(['approval']);
            }
            else{
              alert("Sorry Some Thing Went Wrong Pleace Try Again")
            }
            })
        }
       //  else if(this.approver_role == "cmd"){
       //    var formData = new FormData();
     
       //    formData.append('token', this.maintoken);
       //    formData.append('id', this.id)
       //    formData.append('approve', "Yes")
       //    formData.append('cmd_comment',this.comment)
    
       //    this.apiService.cmdapprove(formData).subscribe(data=>{ 
       //      console.log(data)
       //      this.dataa=data
       //      this.status=this.dataa.status
       //      if(this.status == "save"){
       //        alert("You Have Successfully Approved The Request")
       //        this.routeCtrl.navigate(['approval']);
       //      }
       //      else{
       //        alert("Sorry Some Thing Went Wrong Pleace Try Again")
       //      }
       //      })
       //  }
    }
 
    else{
      alert("Please Provide Non-Budget Comment")
    }
   
 
 
     }
     if(this.budget_type =='1'){
       if(this.approver_role == "supervisor"){
         console.log("Work")
            var formData = new FormData();
       
            formData.append('token', this.maintoken);
            formData.append('id', this.id)
            formData.append('approve', "Yes")
            formData.append('supervisor_comment',this.comment)
      
            this.apiService.superaprove(formData).subscribe(data=>{ 
              console.log(data)
              this.dataa=data
              this.status=this.dataa.status
              if(this.status == "save"){
                alert("You Have Successfully Approved The Request")
                this.routeCtrl.navigate(['approval']);
              }
              else{
                alert("Sorry Some Thing Went Wrong Pleace Try Again")
              }
              
      
             
              })
          }
          else if(this.approver_role == "budget_owner"){
            var formData = new FormData();
       
            formData.append('token', this.maintoken);
            formData.append('id', this.id)
            formData.append('approve', "Yes")
            formData.append('budget_owner_comment',this.comment)
      
            this.apiService.budgetownerapprove(formData).subscribe(data=>{ 
              console.log(data)
              this.dataa=data
              this.status=this.dataa.status
              if(this.status == "save"){
                alert("You Have Successfully Approved The Request")
                this.routeCtrl.navigate(['approval']);
              }
              else{
                alert("Sorry Some Thing Went Wrong Pleace Try Again")
              }
              })
          }
          else if(this.approver_role == "cfo"){
            var formData = new FormData();
       
            formData.append('token', this.maintoken);
            formData.append('id', this.id)
            formData.append('approve', "Yes")
            formData.append('cfo_comment',this.comment)
      
            this.apiService.cfoapprove(formData).subscribe(data=>{ 
              console.log(data)
              this.dataa=data
              this.status=this.dataa.status
              if(this.status == "save"){
                alert("You Have Successfully Approved The Request")
                this.routeCtrl.navigate(['approval']);
              }
              else{
                alert("Sorry Some Thing Went Wrong Pleace Try Again")
              }
              })
          }
          else if(this.approver_role == "cmd"){
            var formData = new FormData();
       
            formData.append('token', this.maintoken);
            formData.append('id', this.id)
            formData.append('approve', "Yes")
            formData.append('cmd_comment',this.comment)
      
            this.apiService.cmdapprove(formData).subscribe(data=>{ 
              console.log(data)
              this.dataa=data
              this.status=this.dataa.status
              if(this.status == "save"){
                alert("You Have Successfully Approved The Request")
                this.routeCtrl.navigate(['approval']);
              }
              else{
                alert("Sorry Some Thing Went Wrong Pleace Try Again")
              }
              })
          }
     }

}

load.dismiss()

})


 

  
   


  }

  no(){
    this.loadingcontroler.create({
      message:"Loading ..."
    }).then((load)=>{
     load.present()
     if(this.approver_role == "cmd"){
     
      if(this.comment){
        if(this.approver_role == "supervisor"){
          console.log("Work")
             var formData = new FormData();
        
             formData.append('token', this.maintoken);
             formData.append('id', this.id)
             formData.append('approve', "No")
             formData.append('supervisor_comment',this.comment)
       
             this.apiService.superaprove(formData).subscribe(data=>{ 
               console.log(data)
               this.dataa=data
               this.status=this.dataa.status
  
               if(this.status == "save"){
                 alert("You Have Successfully Rejected The Request")
                 this.routeCtrl.navigate(['approval']);
               }
               else{
                 alert("Sorry Some Thing Went Wrong Pleace Try Again")
               }
               })
           }
           else if(this.approver_role == "budget_owner"){
            var formData = new FormData();
       
            formData.append('token', this.maintoken);
            formData.append('id', this.id)
            formData.append('approve', "No")
            formData.append('budget_owner_comment',this.comment)
      
            this.apiService.budgetownerapprove(formData).subscribe(data=>{ 
              console.log(data)
              this.dataa=data
              this.status=this.dataa.status
              if(this.status == "save"){
                alert("You Have Successfully Rejected The Request")
                this.routeCtrl.navigate(['approval']);
              }
              else{
                alert("Sorry Some Thing Went Wrong Pleace Try Again")
              }
              })
          }
           else if(this.approver_role == "cfo"){
            var formData = new FormData();
       
            formData.append('token', this.maintoken);
            formData.append('id', this.id)
            formData.append('approve', "No")
            formData.append('cfo_comment',this.comment)
      
            this.apiService.cfoapprove(formData).subscribe(data=>{ 
              console.log(data)
              this.dataa=data
              this.status=this.dataa.status
              if(this.status == "save"){
                alert("You Have Successfully Rejected The Request")
                this.routeCtrl.navigate(['approval']);
              }
              else{
                alert("Sorry Some Thing Went Wrong Pleace Try Again")
              }
              })
          }
          else if(this.approver_role == "cmd"){
            var formData = new FormData();
       
            formData.append('token', this.maintoken);
            formData.append('id', this.id)
            formData.append('approve', "No")
            formData.append('cmd_comment',this.comment)
          
            this.apiService.cmdapprove(formData).subscribe(data=>{ 
              console.log(data)
              this.dataa=data
              this.status=this.dataa.status
              if(this.status == "save"){
                alert("You Have Successfully Rejected The Request")
                this.routeCtrl.navigate(['approval']);
              }
              else{
                alert("Sorry Some Thing Went Wrong Please Try Again")
              }
              })
          }
      
      
      else{
        alert("Comment Field is mandatory")
      }
    }
    else{
      alert("Comment Field Is Mandatory")
    }
  }
  if(this.approver_role !== "cmd"){
 
    if(this.budget_type =='2'){
      if(this.comment && this.noncomment){
        if(this.approver_role == "supervisor"){
          console.log("Work")
             var formData = new FormData();
        
             formData.append('token', this.maintoken);
             formData.append('id', this.id)
             formData.append('approve', "No")
             formData.append('supervisor_comment',this.comment)
             formData.append('non_budgeted_budgetowner_comment',this.noncomment)
             this.apiService.superaprove(formData).subscribe(data=>{ 
               console.log(data)
               this.dataa=data
               this.status=this.dataa.status
  
               if(this.status == "save"){
                 alert("You Have Successfully Rejected The Request")
                 this.routeCtrl.navigate(['approval']);
               }
               else{
                 alert("Sorry Some Thing Went Wrong Pleace Try Again")
               }
               })
           }
           else if(this.approver_role == "budget_owner"){
            var formData = new FormData();
       
            formData.append('token', this.maintoken);
            formData.append('id', this.id)
            formData.append('approve', "No")
            formData.append('budget_owner_comment',this.comment)
            formData.append('non_budgeted_budgetowner_comment',this.noncomment)
            this.apiService.budgetownerapprove(formData).subscribe(data=>{ 
              console.log(data)
              this.dataa=data
              this.status=this.dataa.status
              if(this.status == "save"){
                alert("You Have Successfully Rejected The Request")
                this.routeCtrl.navigate(['approval']);
              }
              else{
                alert("Sorry Some Thing Went Wrong Pleace Try Again")
              }
              })
          }
           else if(this.approver_role == "cfo"){
            var formData = new FormData();
       
            formData.append('token', this.maintoken);
            formData.append('id', this.id)
            formData.append('approve', "No")
            formData.append('cfo_comment',this.comment)
            formData.append('non_budgeted_cfo_comment',this.noncomment)
            this.apiService.cfoapprove(formData).subscribe(data=>{ 
              console.log(data)
              this.dataa=data
              this.status=this.dataa.status
              if(this.status == "save"){
                alert("You Have Successfully Rejected The Request")
                this.routeCtrl.navigate(['approval']);
              }
              else{
                alert("Sorry Some Thing Went Wrong Pleace Try Again")
              }
              })
          }
          // else if(this.approver_role == "cmd"){
          //   var formData = new FormData();
       
          //   formData.append('token', this.maintoken);
          //   formData.append('id', this.id)
          //   formData.append('approve', "No")
          //   formData.append('cmd_comment',this.comment)
          
          //   this.apiService.cmdapprove(formData).subscribe(data=>{ 
          //     console.log(data)
          //     this.dataa=data
          //     this.status=this.dataa.status
          //     if(this.status == "save"){
          //       alert("You Have Successfully Rejected The Request")
          //       this.routeCtrl.navigate(['approval']);
          //     }
          //     else{
          //       alert("Sorry Some Thing Went Wrong Please Try Again")
          //     }
          //     })
          // }
      }
      else{
        alert("Please Fill-Up Mandatory Fields")
      }
    }
    
    if(this.budget_type =='1'){
      if(this.comment){
        if(this.approver_role == "supervisor"){
          console.log("Work")
             var formData = new FormData();
        
             formData.append('token', this.maintoken);
             formData.append('id', this.id)
             formData.append('approve', "No")
             formData.append('supervisor_comment',this.comment)
       
             this.apiService.superaprove(formData).subscribe(data=>{ 
               console.log(data)
               this.dataa=data
               this.status=this.dataa.status
  
               if(this.status == "save"){
                 alert("You Have Successfully Rejected The Request")
                 this.routeCtrl.navigate(['approval']);
               }
               else{
                 alert("Sorry Some Thing Went Wrong Pleace Try Again")
               }
               })
           }
           else if(this.approver_role == "budget_owner"){
            var formData = new FormData();
       
            formData.append('token', this.maintoken);
            formData.append('id', this.id)
            formData.append('approve', "No")
            formData.append('budget_owner_comment',this.comment)
      
            this.apiService.budgetownerapprove(formData).subscribe(data=>{ 
              console.log(data)
              this.dataa=data
              this.status=this.dataa.status
              if(this.status == "save"){
                alert("You Have Successfully Rejected The Request")
                this.routeCtrl.navigate(['approval']);
              }
              else{
                alert("Sorry Some Thing Went Wrong Pleace Try Again")
              }
              })
          }
           else if(this.approver_role == "cfo"){
            var formData = new FormData();
       
            formData.append('token', this.maintoken);
            formData.append('id', this.id)
            formData.append('approve', "No")
            formData.append('cfo_comment',this.comment)
      
            this.apiService.cfoapprove(formData).subscribe(data=>{ 
              console.log(data)
              this.dataa=data
              this.status=this.dataa.status
              if(this.status == "save"){
                alert("You Have Successfully Rejected The Request")
                this.routeCtrl.navigate(['approval']);
              }
              else{
                alert("Sorry Some Thing Went Wrong Pleace Try Again")
              }
              })
          }
          else if(this.approver_role == "cmd"){
            var formData = new FormData();
       
            formData.append('token', this.maintoken);
            formData.append('id', this.id)
            formData.append('approve', "No")
            formData.append('cmd_comment',this.comment)
          
            this.apiService.cmdapprove(formData).subscribe(data=>{ 
              console.log(data)
              this.dataa=data
              this.status=this.dataa.status
              if(this.status == "save"){
                alert("You Have Successfully Rejected The Request")
                this.routeCtrl.navigate(['approval']);
              }
              else{
                alert("Sorry Some Thing Went Wrong Please Try Again")
              }
              })
          }
      
      
     
    }
    else{
      alert("Comment Field is mandatory")
    }
    }

  }

  load.dismiss()
    });

    
  




    
  
   
  
  }

  download(item){
    var AttachmentUrl=item.url
    
    var attachment=AttachmentUrl.substr(AttachmentUrl.length - 4)
  console.log(attachment)
  if(attachment == '.doc'){
    console.log("doc")
    this.file_type="application/msword"
    
  }

  else if(attachment == 'docx'){
    console.log("docx")
    this.file_type="application/vnd.openxmlformats-officedocument.wordprocessingml.document"
  }
  else if(attachment == '.xls'){
    console.log(".xls")
    this.file_type=" application/vnd.ms-excel"
   
  }
  else if(attachment == 'xlsx'){
    console.log("xlsx")
    this.file_type="application/vnd.openxmlformats-officedocument.spreadsheetml.sheet"
  }
  else if(attachment == '.jpg'){
    console.log(".jpg")
    this.file_type="image/jpeg"
  }
  else if(attachment == 'jpeg'){
    this.file_type="image/jpeg"
  }
  else if(attachment == '.pdf'){
    this.file_type="application/pdf"
  }
    this.loadingcontroler.create({
      message:"Loading ..."
    }).then((load)=>{
     load.present()
     console.log("hi"+item.url)
let url = encodeURI(item.url);  
//here initializing object.  
this.fileTransfer = this.transfer.create();  
// here iam mentioned this line this.file.externalRootDirectory is a native pre-defined file path storage. You can change a file path whatever pre-defined method.  
this.fileTransfer.download(url, this.file.externalApplicationStorageDirectory + item.url, true).then((entry) => {  
    //here logging our success downloaded file path in mobile.  
    //  alert('download completed: ' + entry.toURL());
    load.dismiss() 
     alert('download completed ');   
     localStorage.setItem("url",JSON.stringify(entry.toURL()))

       this.view=entry.toURL()
      
    //   this.options: DocumentViewerOptions = {
    //   title: 'My PDF'
    // }
    
  //   // this.document.viewDocument('/assets/demo.pdf', 'file/pdf', options)
  //   this.fileOpener.showOpenWithDialog('/assets/demo.pdf', 'application/pdf')
  //   //  this.fileOpener.showOpenWithDialog(entry.toURL(), item.url)
  //   // this.fileOpener.showOpenWithDialog( Demo, item.url)
  // .then(() => console.log('File is opened'))
  // .catch(e => alert(e));


   
}, (error) => {  
    //here logging our error its easier to find out what type of error occured.  
  //  alert('download failed: ' + JSON.stringify(error)); 
   alert('download failed: ' );   
    
}).then(()=>



    
    // this.document.viewDocument(this.view, 'file/pdf', this.options)
this.fileOpener.showOpenWithDialog(this.view,this.file_type)

.then(() => console.log('File is opened'))
.catch(e => console.log(e))


)

    })










  }


  back(){
    this.navCtrl.pop();
  }

}
