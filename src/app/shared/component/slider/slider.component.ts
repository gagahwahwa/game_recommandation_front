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
      this.selected = this.items.length - 1;
    } else {
      this.selected--;
    }
  }
}
