import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-star-rate-bar',
  templateUrl: './star-rate-bar.component.html',
  styleUrls: ['./star-rate-bar.component.scss']
})
export class StarRateBarComponent implements OnInit {
  starArray: Array<number>;
  rate: number;

  constructor() {
  }

  ngOnInit() {
    this.starArray = new Array(5);
  }
}
