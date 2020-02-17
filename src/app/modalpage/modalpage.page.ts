import { Component, OnInit,ViewChild } from '@angular/core';
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
// import { ScreenOrientation } from '@ionic-native/screen-orientation/ngx';
@Component({
  selector: 'app-modalpage',
  templateUrl: './modalpage.page.html',
  styleUrls: ['./modalpage.page.scss'],
})
export class ModalpagePage implements OnInit {

  canvas="#barCanvas";
  @ViewChild('barCanvas',{static:false}) barCanvas;

  barChart:any;
  bar:any;
  gdata=[5, 4, 2, 9, 8, 7];
  foo;
  boo;
  info:any;
  id:any;
  year:any;
  token:any;
  maintoken:any;
  data:any;
  graphdata:any;
  processed_json:any=[];
  label:any;
  value:any;
  name:any;
  header:any;
// cnstructor(public navCtrl: NavController,private menuCtrl: MenuController,private apiService: ApiService,public toastController: ToastController,public modalController: ModalController) { }
constructor(private route: ActivatedRoute,public navParams: NavParams,public platform: Platform, private screenOrientation: ScreenOrientation,public navCtrl: NavController,private menuCtrl: MenuController,private apiService: ApiService,public toastController: ToastController,public modalController: ModalController) { 
  this.screenOrientation.lock(this.screenOrientation.ORIENTATIONS.LANDSCAPE);
  this.id=navParams.get('id')
  this.year=navParams.get('year')

this.name=navParams.get('name')
this.header=navParams.get('header')



  console.log(this.id)
  console.log(this.year)
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
    this.apiService.ytdGraph(formData).subscribe(data=>{ 
    console.log(data)
   this.data=data
   this.graphdata=this.data.data
   this.label= this.graphdata.label
   this.value=this.graphdata.ytd
  console.log(this.graphdata)
  console.log(this.graphdata)

  this.barChartMethod();

    
    })
 console.log("1")
   
   console.log("2")
    

  }

  close() {
    // using the injected ModalController this page
    // can "dismiss" itself and optionally pass back data
    this.screenOrientation.lock(this.screenOrientation.ORIENTATIONS.PORTRAIT);
    this.modalController.dismiss({
      'dismissed': true
    });
  }
  barChartMethod() {
    var ctx = document.getElementById("myChart");

var data = {
  labels: this.label,
  datasets: [{
    label: 'YTD Budget Utilization RS',
    data: this.value,
    backgroundColor: [
        'rgb(124, 181, 236)',
        'rgb(124, 181, 236)',
        'rgb(124, 181, 236)',
        'rgb(124, 181, 236)',
        'rgb(124, 181, 236)', 
        'rgb(124, 181, 236)',
        'rgb(124, 181, 236)', 
        'rgb(124, 181, 236)',
        'rgb(124, 181, 236)',
        'rgb(124, 181, 236)',
        'rgb(124, 181, 236)',
        'rgb(124, 181, 236)'
       

    ],
    borderColor: [
      'rgb(124, 181, 236)',
      'rgb(124, 181, 236)',
      'rgb(124, 181, 236)',
      'rgb(124, 181, 236)',
      'rgb(124, 181, 236)', 
      'rgb(124, 181, 236)',
      'rgb(124, 181, 236)', 
      'rgb(124, 181, 236)',
      'rgb(124, 181, 236)',
      'rgb(124, 181, 236)',
      'rgb(124, 181, 236)',
      'rgb(124, 181, 236)'
    

    ],
    borderWidth: 1
}]
};

var myBarChart = new Chart(ctx, {
  type: 'bar',
  data: data,
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
});

  }
//   ytdgraph(){
//     let myChart = HighCharts.chart('single', {
//       credits: {
//         enabled: false
//    },
//       chart: {
//         type: 'column',
//         height: (5 / 16 * 100) + '%',
//     },
//     title: {
//       text: 'YTD Budget Utilization Trend'
//   },
//   xAxis: {
//     type: 'category',
//     labels: {
//         rotation: -45,
//         style: {
//             fontSize: '13px',
//             fontFamily: 'Verdana, sans-serif'
//         }
//     }
// },
// yAxis: {
//   min: 0,
//   title: {
//       text: 'Amount In INR'
//   }
// },
// legend: {
//   enabled: false
// },

//       tooltip: {
//         pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
//       },
//       plotOptions: {
//         pie: {
//           allowPointSelect: true,
//           cursor: 'pointer',
//           dataLabels: {
//             enabled: true,
//             format: '<b>{point.name}</b>: {point.percentage:.1f} %',
//             style: {
//               color: 'black'
//             }
//           }
//         }
//       },
//       series: [{
//         name: 'YTD Budget Utilization Trend',
//         colorByPoint: true,
//         type: undefined,
//         data: [
//           this.graphdata,
//           // ['February', 20.8],
//           // ['March', 14.9],
//           // ['April', 13.7],
//           // ['May', 13.1],
//           // ['June', 12.7],
//           // ['Jully', 11.7],
//           // ['August', 11.5],
//           // ['September', 11.2],
//           // ['October', 11.1],
//           // ['November', 10.6],
//           // ['December', 10.6],
         
//       ],
//       dataLabels: {
//           enabled: true,
//           rotation: -90,
//           color: '#FFFFFF',
//           align: 'right',
//           format: '{point.y:.1f}', // one decimal
//           y: 10, // 10 pixels down from the top
//           style: {
//               fontSize: '13px',
//               fontFamily: 'Verdana, sans-serif'
//           }
//       }
//       }]
//     });
//   }
  
}
