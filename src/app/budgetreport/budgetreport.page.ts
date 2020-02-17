import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
import { RouterModule, Router, Routes, ActivatedRoute } from '@angular/router';
import { ToastController, AlertController,LoadingController,NavController,MenuController } from '@ionic/angular';
@Component({
  selector: 'app-budgetreport',
  templateUrl: './budgetreport.page.html',
  styleUrls: ['./budgetreport.page.scss'],
})
export class BudgetreportPage implements OnInit {
  token:any;
  maintoken:any
  data:any;
  report_list:any;
  constructor(public loadingcontroler: LoadingController,public routeCtrl: Router,public navCtrl: NavController,private menuCtrl: MenuController,private apiService: ApiService,public toastController: ToastController) { }


  ngOnInit() {
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

    });
 

// for(let i=0; i<)


  })

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

}

ngAfterViewInit() {

}

}
