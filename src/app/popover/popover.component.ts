import { Component, OnInit,ViewChild } from '@angular/core';
import { Chart } from 'chart.js';
@Component({
  selector: 'app-popover',
  templateUrl: './popover.component.html',
  styleUrls: ['./popover.component.scss'],
})
export class PopoverComponent implements OnInit {

  canvas="#barCanvas";
  @ViewChild('barCanvas',{static:false}) barCanvas;

  barChart:any;
  gdata=[5, 4, 2, 9, 8, 7];
 
  constructor() { }

 
  ngOnInit() {
    this.barChartMethod();
  }



  barChartMethod() {
    var ctx = document.getElementById("myChart");

var data = {
  labels: ["demo", "demo", "demo"],
  datasets: [{
    label: "demo",
    backgroundColor: "blue",
    data: [3, 7, 4]
  }, {
    label: "demo",
    backgroundColor: "red",
    data: [4, 3, 5]
  }, {
    label: "demo",
    backgroundColor: "green",
    data: [7, 2, 6]
  }]
};

var myBarChart = new Chart(ctx, {
  type: 'bar',
  data: data,
  options: {
    barValueSpacing: 20,
    scales: {
      yAxes: [{
        ticks: {
          min: 0,
        }
      }]
    }
  }
});

  }

}
