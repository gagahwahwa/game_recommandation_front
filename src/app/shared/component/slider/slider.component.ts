import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.scss']
})
export class SliderComponent implements OnInit {
  @Input() items: any[];
  selected: number;

  constructor() {
    this.items = [
      {
        url: '../../../../assets/header.jpg',
      },
      {
        url: 'http://img.tenasia.hankyung.com/webwp_kr/wp-content/uploads/2017/07/2017070610080220951-540x386.jpg'
      }
    ];
  }

  ngOnInit() {
    this.selected = 0;
  }

  next() {
    if (this.selected + 1 === this.items.length) {
      this.selected = 0;
    } else {
      this.selected++;
    }
  }

  prev() {
    if (this.selected === 0) {
      this.selected = this.items.length;
    } else {
      this.selected--;
    }
  }
}
