import { Component, HostListener, Input, OnChanges, OnInit } from '@angular/core';

@Component({
  selector: 'app-progress-bar',
  templateUrl: './progress-bar.component.html',
  styleUrls: ['./progress-bar.component.scss']
})
export class ProgressBarComponent implements OnInit, OnChanges {
  @Input() fixed = false;
  @Input() LIMIT = 100;
  @Input() parent = 'normal';
  @Input() ratingCount = 0;

  isFixed: boolean;
  start: number;
  end: number;
  indicatedNumber: number;

  private SHIFT_ELEMENT_SCROLL_Y = 85; // navbar height + 1rem;

  constructor() {
  }

  ngOnInit() {
    this.isFixed = false;
  }

  ngOnChanges() {
    this.calculateIndicatorNumber();
  }

  calculateIndicatorNumber() {
    const division = Math.floor(this.ratingCount / this.LIMIT);
    this.start = division * this.LIMIT;
    this.end = this.start + this.LIMIT;
    this.indicatedNumber = this.ratingCount % this.LIMIT / this.LIMIT * 100;
  }

  @HostListener('window:scroll')
  onWindowScroll() {
    if (this.fixed && window.screenY < this.SHIFT_ELEMENT_SCROLL_Y) {
      this.isFixed = this.fixed && window.scrollY > this.SHIFT_ELEMENT_SCROLL_Y;
    }
  }
}
