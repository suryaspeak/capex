import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
import { RouterModule, Router, Routes, ActivatedRoute } from '@angular/router';
import { ToastController, AlertController,LoadingController,NavController,MenuController } from '@ionic/angular';
@Component({
  selector: 'app-reports',
  templateUrl: './reports.page.html',
  styleUrls: ['./reports.page.scss'],
})
export class ReportsPage implements OnInit {
token:any;
maintoken:any;
report_list:any;
data:any;
  constructor(public loadingcontroler: LoadingController,public routeCtrl: Router,public navCtrl: NavController,private menuCtrl: MenuController,private apiService: ApiService,public toastController: ToastController) { }

  ngOnInit() {
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
     this.token=JSON.parse(localStorage.getItem('token'))   
 
     this.maintoken=this.token.token
     var formDataa = new FormData(); 
     formDataa.append('token', this.maintoken);   
     this.apiService.reports(formDataa).subscribe(data=>{ 
     console.log(data)
     load.dismiss()
    this.data=data
    this.report_list=this.data.budgetvsactual
   console.log(this.report_list)
 
 
 
 
   })

    });

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

// check(){
//   console.log("work")
//   var accItem = document.getElementsByClassName('accordionItem');
//     var accHD = document.getElementsByClassName('accordionItemHeading');
//     for ( let i = 0; i < accHD.length; i++) {
//       console.log("for")
//         accHD[i].addEventListener("click", toggleItem, false);
//     }
//     function toggleItem() {
//       console.log("toogle")
//         var itemClass = this.parentNode.className;
//         for (let j = 0; j < accItem.length; j++) {
//             accItem[j].className = 'accordionItem close';
//             console.log("toogle for")
//         }
//         if (itemClass == 'accordionItem close') {
//           console.log("toogle acordion")
//             this.parentNode.className = 'accordionItem open';
//         }
//     }
// }
}
