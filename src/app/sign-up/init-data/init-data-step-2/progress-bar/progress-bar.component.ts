import { Component, HostListener, Input, OnInit } from '@angular/core';
import { InitDataStoreService } from '../../shared/store/init-data-store.service';

@Component({
  selector: 'app-progress-bar',
  templateUrl: './progress-bar.component.html',
  styleUrls: ['./progress-bar.component.scss']
})
export class ProgressBarComponent implements OnInit {
  isFixed: boolean;
  start: number;
  end: number;
  indicatedNumber: number;

  private SHIFT_ELEMENT_SCROLL_Y = 85; // navbar height + 1rem;
  private LIMIT = 100;

  constructor(private initDataStore: InitDataStoreService) {
  }

  ngOnInit() {
    this.isFixed = false;
    this.calculateIndictorNumber();
  }

  calculateIndictorNumber() {
    const division = Math.floor(this.initDataStore.ratingCount / this.LIMIT);
    this.start = division * this.LIMIT;
    this.end = this.start + this.LIMIT;
    this.indicatedNumber = this.initDataStore.ratingCount % this.LIMIT;
  }

  @HostListener('window:scroll')
  onWindowScroll() {
    if (window.scrollY > this.SHIFT_ELEMENT_SCROLL_Y) {
      this.isFixed = true;
    } else {
      this.isFixed = false;
    }
  }
}
