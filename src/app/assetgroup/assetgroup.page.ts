import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
import { ScreenOrientation } from '@ionic-native/screen-orientation/ngx';
import { Platform } from '@ionic/angular';
import { Chart } from 'chart.js';
import { NavParams } from '@ionic/angular';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastController, AlertController,LoadingController,NavController,MenuController,ModalController } from '@ionic/angular';
@Component({
  selector: 'app-assetgroup',
  templateUrl: './assetgroup.page.html',
  styleUrls: ['./assetgroup.page.scss'],
})
export class AssetgroupPage implements OnInit {
  canvas="#barCanvas";
  id:any;
  year:any;
  type:any;
  token:any;
  maintoken:any;
  data:any;
  maindata:any;
  datasets:any;
  name:any;
  header:any;
  constructor(private route: ActivatedRoute,public navParams: NavParams,public platform: Platform, private screenOrientation: ScreenOrientation,public navCtrl: NavController,private menuCtrl: MenuController,private apiService: ApiService,public toastController: ToastController,public modalController: ModalController) {
    this.id=navParams.get('id')
    this.year=navParams.get('year')
    this.type=navParams.get('type')
    this.name=navParams.get('name')
this.header=navParams.get('header')
    this.screenOrientation.lock(this.screenOrientation.ORIENTATIONS.LANDSCAPE);
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
    this.datasets=this.data.data
   console.log(this.datasets)

  
  
  


  this.barChartMethod();

    
    })
   
    console.log("line")
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
  type: "bar",
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

});
var chartOptions = {
  responsive: true,
  legend: {
    position: "top"
  },
  title: {
    display: true,
    text: "Bar Chart"
  },
  scales: {
    yAxes: [{
      ticks: {
        beginAtZero: true
      },
      scaleLabel: {
        display: true,
        labelString: "Ammount In INR",
        fontColor: "green"
      }
    }]
  }
}

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
