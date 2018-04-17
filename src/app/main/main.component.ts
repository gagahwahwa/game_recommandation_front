import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {
  items: Array<any> = [];

  constructor() {
    this.items = [
      { name: 'assets/main/header1.jpg' },
      { name: 'assets/main/header2.jpg' },
      { name: 'assets/main/header3.jpg' },
      { name: 'assets/main/header4.jpg' },
      { name: 'assets/main/header5.jpg' }
    ];
   }

  ngOnInit() {
  }

}
