import { Component, OnInit } from '@angular/core';
import * as HighCharts from 'highcharts';
import { ApiService } from '../api.service';
import { ScreenOrientation } from '@ionic-native/screen-orientation/ngx';
import { Platform } from '@ionic/angular';
import { ToastController, AlertController,LoadingController,NavController,MenuController,ModalController } from '@ionic/angular';
@Component({
  selector: 'app-piemodal',
  templateUrl: './piemodal.component.html',
  styleUrls: ['./piemodal.component.scss'],
})
export class PiemodalComponent implements OnInit {

  constructor(public platform: Platform, private screenOrientation: ScreenOrientation,public navCtrl: NavController,private menuCtrl: MenuController,private apiService: ApiService,public toastController: ToastController,public modalController: ModalController) { 
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
    this.plotSimplePieChart();
  }
  close() {
    this.screenOrientation.lock(this.screenOrientation.ORIENTATIONS.PORTRAIT);
    // using the injected ModalController this page
    // can "dismiss" itself and optionally pass back data
    this.modalController.dismiss({
     
      'dismissed': true
    });
  }
  plotSimplePieChart() {
    let myChart = HighCharts.chart('pieChart', {
      credits: {
        enabled: false
   },
      chart: {
        plotBackgroundColor: null,
        plotBorderWidth: null,
        plotShadow: false,
        height: (5 / 16 * 100) + '%',
        type: 'pie'
      },
      title: {
        text: 'SBU Wise Budget Consumtion, 2020'
      },
      tooltip: {
        pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
      },
      plotOptions: {
        pie: {
          allowPointSelect: true,
          cursor: 'pointer',
          dataLabels: {
            enabled: true,
            format: '<b>{point.name}</b>: {point.percentage:.1f} %',
            style: {
              color: 'black'
            }
          }
        }
      },
      series: [{
        name: 'SBU',
        colorByPoint: true,
        type: undefined,
        data: [{
          name: 'CON',
          y: 61.41,
          sliced: true,
          selected: true
        }, {
          name: 'CORP',
          y: 11.84
        }, {
          name: 'IT',
          y: 10.85
        }, {
          name: 'MINING',
          y: 4.67
        }, {
          name: 'CON/E&T',
          y: 4.18
        }, {
          name: 'E&T',
          y: 1.64
        }, {
          name: 'MHS',
          y: 1.6
        }, {
          name: 'SEM',
          y: 1.2
        }, {
          name: 'Sitech',
          y: 2.61
        }]
      }]
    });
  }

}
