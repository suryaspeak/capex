import { Component, OnInit, ViewChild } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { ApiService } from '../api.service';
import * as HighCharts from 'highcharts';
import { ToastController, AlertController,LoadingController,NavController,MenuController } from '@ionic/angular';

import {  } from '@ionic/angular';
import { Platform } from '@ionic/angular';
import { ScreenOrientation } from '@ionic-native/screen-orientation/ngx';
import { NavParams } from '@ionic/angular';
import { ActivatedRoute, Router } from '@angular/router';
import { Chart } from 'chart.js';
@Component({
  selector: 'app-modal2',
  templateUrl: './modal2.page.html',
  styleUrls: ['./modal2.page.scss'],
})
export class Modal2Page implements OnInit {

  canvas="#barCanvas";
  @ViewChild('barCanvas',{static:false}) barCanvas;

  barChart:any;
  bar:any;
  gdata=[5, 4, 2, 9, 8, 7];
  foo;
  boo;
  id:any;
  year:any;
  token:any;
  maintoken:any;
  graphdata:any;
  data:any;
  value:any;
  label:any;
  type:any;
  datasets:any;
  maindata:any;
  name:any;
  header:any;
  maindata2:any=[]
  color:any;
  custom_label:any=[];
  constructor(private route: ActivatedRoute,public navParams: NavParams,public platform: Platform, private screenOrientation: ScreenOrientation,public navCtrl: NavController,private menuCtrl: MenuController,private apiService: ApiService,public toastController: ToastController,public modalController: ModalController) {
  
  
  
  
  
    this.screenOrientation.lock(this.screenOrientation.ORIENTATIONS.LANDSCAPE);
    this.id=navParams.get('id')
    this.year=navParams.get('year')
    this.type=navParams.get('type')
    console.log(this.id)
    console.log(this.year)
    this.name=navParams.get('name')
this.header=navParams.get('header')
    this.platform.backButton.subscribe(() => {
      // this does work
     
      this.screenOrientation.lock(this.screenOrientation.ORIENTATIONS.PORTRAIT);
      // using the injected ModalController this page
      // can "dismiss" itself and optionally pass back data
      this.modalController.dismiss({
       
        'dismissed': true
      });
    });
   }

  ngOnInit() {
   

    console.log(this.id)
    console.log(this.year)
    this.token=JSON.parse(localStorage.getItem('token'))   
      this.maintoken=this.token.token
      var formData = new FormData(); 
    formData.append('token', this.maintoken); 
    formData.append('id', this.id ); 
    formData.append('year',this.year)
    formData.append('type',this.type)
    this.apiService.asset(formData).subscribe(data=>{ 
    console.log(data)
   this.data=data
   this.maindata=this.data.data
   this.label=this.data.label
   this.color=this.data.color
   console.log(this.label.length)
 
  for(let i =0;i<this.label.length;i++){
    console.log("work")
    console.log(this.label[i])
    this.custom_label.push([this.label[i]+"(%)"])

  }
  console.log(this.custom_label)
  


  this.pie();

    
    })
 console.log("1")
   
   console.log("2")
    
    
   
    

  }

  // close() {
  //   // using the injected ModalController this page
  //   // can "dismiss" itself and optionally pass back data
  //   this.modalController.dismiss({
  //     'dismissed': true
  //   });
  // }
//   barChartMethod() {
//     var ctx = document.getElementById("myChart");

// var data = {
//   labels: ["January", "February", "March"],
//   datasets: [{
//     label: "jan",
//     backgroundColor: "#F39580",
//     data: [3, 7, 4]
//   }, {
//     label: "feb",
//     backgroundColor: "#F3EC80",
//     data: [4, 3, 5]
//   }, {
//     label: "march",
//     backgroundColor: "#59E76E",
//     data: [7, 2, 6]
//   }]
// };

// var myBarChart = new Chart(ctx, {
//   type: 'bar',
//   data: data,
//   options: {
//     barValueSpacing: 20,
//     scales: {
//       yAxes: [{
//         ticks: {
//           min: 0,
//         }
//       }]
//     }
//   }
// });

//   }
  pie(){
    var ctx = document.getElementById("myChart");
    var data1 = {
      labels: this.custom_label,
      datasets: [
          {
            label: this.custom_label,
            data: this.maindata,
            backgroundColor: this.color
      // datasets: [
      //   {
      //     label: "TeamA Score",
      //     data: [36000],
      //     backgroundColor: [
      //       "#DEB887",
      //       "#A9A9A9",
      //       "#DC143C",
      //       "#F4A460",
      //       "#2E8B57"
      //     ],
      //     borderColor: [
      //       "#CDA776",
      //       "#989898",
      //       "#CB252B",
      //       "#E39371",
      //       "#1D7A46"
      //     ],
      //     borderWidth: [1, 1, 1, 1, 1]
        }
      ]
    };
    var options = {
      responsive: true,
      title: {
        display: true,
        position: "top",
        text: "Pie Chart",
        fontSize: 18,
        fontColor: "#111"
      },
      legend: {
        display: true,
        position: "bottom",
        labels: {
          fontColor: "#333",
          fontSize: 16
        }
      }
    };
    var chart1 = new Chart(ctx, {
      type: "pie",
      data: data1,
      options: options
    });
  }


  close() {
    // using the injected ModalController this page
    // can "dismiss" itself and optionally pass back data
    this.screenOrientation.lock(this.screenOrientation.ORIENTATIONS.PORTRAIT);
    this.modalController.dismiss({
      'dismissed': true
    });
  }
}


