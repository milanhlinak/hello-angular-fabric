import { Component, OnInit } from '@angular/core';

import 'fabric';
declare const fabric: any;

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  canvas: any;

  constructor() { }

  ngOnInit() {

    this.canvas = new fabric.Canvas('canvas', {
      width: 500,
      height: 300
    });

    this.canvas.add(new fabric.Rect({
      left: 100,
      top: 100,
      width: 50,
      height: 50,
      fill: '#faa'
    }));

    this.canvas.add(new fabric.Circle({
      left: 200,
      top: 100,
      radius: 25,
      fill: '#afa'
    }));

    this.canvas.add(new fabric.Triangle({
      left: 300,
      top: 100,
      width: 50,
      height: 50,
      fill: '#aaf'
    }));

  }

}
