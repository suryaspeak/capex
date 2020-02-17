import { Component, OnInit, ViewChild } from '@angular/core';

import { ModalController } from '@ionic/angular';
import { GrpahmodalPage } from '../grpahmodal/grpahmodal.page';
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
  selector: 'app-graph',
  templateUrl: './graph.page.html',
  styleUrls: ['./graph.page.scss'],
})
export class GraphPage implements OnInit {
  canvas="#barCanvas";
  @ViewChild('barCanvas',{static:false}) barCanvas;

  barChart:any;
  gdata=[5, 4, 2, 9, 8, 7];
 token:any;
 maintoken:any;
 id:any;
 year:any;
 data:any;
 graphdata:any;
 datasets:any;
 var1=12;

 var2=12;
 var3=15;
 var4=5
 var5=56
 var6=6
 var7=9
 var8=0
 var9=34
 var10=90
 label:any;
 sub:any;
 customdatasets:any=[];
 demodata:any=[ {
  label: "2020",
  backgroundColor: "pink",
  borderColor: "red",
  borderWidth: 1,
  jandata:2,
  febdat:2 ,
}]
name:any;
header:any;
  constructor(private route: ActivatedRoute,public navParams: NavParams,public platform: Platform, private screenOrientation: ScreenOrientation,public navCtrl: NavController,private menuCtrl: MenuController,private apiService: ApiService,public toastController: ToastController,public modalController: ModalController) {
    this.screenOrientation.lock(this.screenOrientation.ORIENTATIONS.LANDSCAPE);
    this.id=navParams.get('id')
    this.year=navParams.get('year')
    this.name=navParams.get('name')
this.header=navParams.get('header')
    console.log(this.id)
    console.log(this.year)
    console.log(this.demodata.data)
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
    var data1 = "36000.00,0,0,0,0,0,0,0,0,0,0,0"

    
    console.log(data1.split(" "))
    this.token=JSON.parse(localStorage.getItem('token'))   
      this.maintoken=this.token.token
      var formData = new FormData(); 
    formData.append('token', this.maintoken); 
    formData.append('id', this.id ); 
    formData.append('year',this.year)
    this.apiService.yoyGraph(formData).subscribe(data=>{ 
    console.log(data)
    this.data=data
    this.datasets=this.data.data.dataset
   console.log(this.datasets)
   for(let i=0;i<this.datasets.length;i++){
    // this.sub=this.datasets[i].data.replace(/['"]+/, "[")
    // console.log(parseInt(this.sub,10))
    // var lastChar = sub.substring(sub.length-1,sub.length);
   
  
    // var spli=this.datasets[i].data.split("")
   

     this.customdatasets.push({"label":this.datasets[i].label,"backgroundColor":this.datasets[i].backgroundColor,"borderColor":this.datasets[i].borderColor,
    "borderWidth":this.datasets[i].borderWidth,"data":data1.split(" ")})

   }
  //  console.log(this.customdatasets)

    // console.log(this.datasets.data)
    // console.log(this.datasets.label)
    // this.label=this.data.data.datasets.label

  this.barChartMethod();

    
    })
 console.log("1")
   
   console.log("2")
    this.barChartMethod();
  }



  barChartMethod() {
    var ctx = document.getElementById("myChart");

// var data = {
//   labels: ["demo", "demo", "demo","gygy"],
//   datasets: [{
//     label: "jan",
//     backgroundColor: "blue",
//     data: [3, 7, 4,5,6]
//   }, {
//     label: "feb",
//     backgroundColor: "red",
//     data: [4, 3, 5]
//   }, {
//     label: "march",
//     backgroundColor: "green",
//     data: [7, 2, 6]
//   }]
// };
var barChartData = {
  labels: [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ],
  datasets: 
   this.datasets
    // [{
    //   label: "2020",
    //   backgroundColor: "lightblue",
    //   borderColor: "blue",
    //   borderWidth: "1",
    //   data: [36000.00, 0, 0, 0, 0,0,0,0,0,0,0,0]
    // },
    // {
    //   label: "2018",
    //   backgroundColor: "lightgreen",
    //   borderColor: "green",
    //   borderWidth: "1",
    //   data:"[10,7,4,6,9,7,3,10,23,4,5,9]"
    // }]

    
  
};
var myBarChart = new Chart(ctx, {
  type: 'bar',
  data: barChartData,
  options: {
    
    
      legend: {
        display: false
      },
    barValueSpacing: 20,
    scales: {
      yAxes: [{
        ticks: {
          min: 0,
        },
        scaleLabel: {
          display: true,
          labelString: "Amount In INR",
          fontColor: "green"
        }
      }]
    }
  }
})

// var myBarChart = new Chart(ctx, {
//   type: "bar",
//   data: barChartData,
//   options: chartOptions
// });
// var chartOptions = {
//   responsive: true,
//   legend: {
//     position: "top"
//   },
//   title: {
//     display: true,
//     text: "Chart.js Bar Chart"
//   },
//   scales: {
//     yAxes: [{
//       ticks: {
//         beginAtZero: true
//       }
//     }]
//   }
// }

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
