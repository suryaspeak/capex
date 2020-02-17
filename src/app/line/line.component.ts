import { Component, OnInit ,ViewChild} from '@angular/core';
import * as HighCharts from 'highcharts';
import { ApiService } from '../api.service';
import { ScreenOrientation } from '@ionic-native/screen-orientation/ngx';
import { Platform } from '@ionic/angular';
import { Chart } from 'chart.js';
import { NavParams } from '@ionic/angular';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastController, AlertController,LoadingController,NavController,MenuController,ModalController } from '@ionic/angular';
@Component({
  selector: 'app-line',
  templateUrl: './line.component.html',
  styleUrls: ['./line.component.scss'],
})
export class LineComponent implements OnInit {
  canvas="#barCanvas";
  id:any;
  year:any;
  type:any;
  token:any;
  maintoken:any;
  data:any;
  maindata:any;
  name:any;
  header:any;
  @ViewChild('barCanvas',{static:false}) barCanvas;
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
    this.maindata=this.data.data
    console.log(this.maindata)

  
  
  


  this.line();

    
    })
    this.line()
    console.log("line")
  }

  line() {
    var speedCanvas = document.getElementById("myChart");

    Chart.defaults.global.defaultFontFamily = "Lato";
    Chart.defaults.global.defaultFontSize = 18;
    
    var dataFirst = {
        label: "loc1",
        data: [0, 59, 75, 20, 20, 55, 40],
        lineTension: 0,
        fill: false,
        borderColor: 'red'
      };
    
    var dataSecond = {
        label: "loc2",
        data: [20, 15, 60, 60, 65, 30, 70],
        lineTension: 0,
        fill: false,
      borderColor: 'blue'
      };
    var datathird = {
        label: "loc3",
        data: [40, 155, 630, 65, 35, 40, 80],
        lineTension: 0,
        fill: false,
      borderColor: 'green'
      };
    var speedData = {
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
      datasets: this.maindata
    };
    
    var chartOptions = {
      legend: {
        display: true,
        position: 'top',
        labels: {
          boxWidth: 80,
          fontColor: 'black'
        }
      }
    };
    var lineChart = new Chart(speedCanvas, {
      type: 'line',
      data: speedData,
      options: {
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
    
    // var lineChart = new Chart(speedCanvas, {
    //   type: 'line',
    //   data: speedData,
    //   options: chartOptions
    // });
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