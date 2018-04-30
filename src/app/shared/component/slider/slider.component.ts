import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { interval } from 'rxjs/observable/interval';
import { Subscription } from 'rxjs/Subscription';

@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.scss']
})
export class SliderComponent implements OnInit, OnDestroy {
  @Input() items: any[];
  selected: number;
  subscription: Subscription;

  constructor(private router: Router) {
  }

  ngOnInit() {
    this.selected = 0;
    this.subscription = interval(3000).subscribe((NOT_USE: number) => {
      this.next();
    });
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
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

  changeCurrent(selected: number) {
    this.selected = selected;
  }
}
