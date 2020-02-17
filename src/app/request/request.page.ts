import { Component, OnInit , ViewChild } from '@angular/core';

@Component({
  selector: 'app-request',
  templateUrl: './request.page.html',
  styleUrls: ['./request.page.scss'],
})
export class RequestPage implements OnInit {
  canvas="#barCanvas";
  // @ViewChild('barCanvas','{}') barCanvas;
  
  barChart:any;
  constructor() { }

  ngOnInit() {
  }

}
