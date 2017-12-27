import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-init-data',
  templateUrl: './init-data.component.html',
  styleUrls: ['./init-data.component.scss']
})
export class InitDataComponent implements OnInit {
  gameData: any;

  constructor() {
  }

  ngOnInit() {
    this.gameData = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25];
  }

}
