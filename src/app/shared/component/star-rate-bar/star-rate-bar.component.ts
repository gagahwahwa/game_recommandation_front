import { ChangeDetectionStrategy, Component, EventEmitter, Input, OnChanges, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-star-rate-bar',
  templateUrl: './star-rate-bar.component.html',
  styleUrls: ['./star-rate-bar.component.scss'],
  changeDetection: ChangeDetectionStrategy.Default
})

export class StarRateBarComponent implements OnChanges, OnInit {
  @Input() rate: number;
  @Input() readOnly? = false;
  @Output() rateChange = new EventEmitter<number>();

  starArray: Array<number>;
  starTypeArray: Array<string>;
  savedStarTypeArray: Array<string>;

  private ICON_HALF_WIDTH = 12;

  constructor() {
  }

  ngOnChanges() {
    if (this.rate === 0) {
      this.starArray = new Array(5);
      this.starTypeArray = new Array(5).fill('star_border');
      this.savedStarTypeArray = new Array(5).fill('star_border');
    }
  }

  ngOnInit() {
    this.starArray = new Array(5);
    this.starTypeArray = new Array(5).fill('star_border');
    this.savedStarTypeArray = new Array(5).fill('star_border');
    if (this.rate) {
      const half = this.rate % 1;
      this.starTypeArray.fill('star', 0, (this.rate - half));
      this.savedStarTypeArray.fill('star', 0, (this.rate - half));
      if (half === 0.5) {
        this.starTypeArray.fill('star_half', (this.rate - half), (this.rate + 1));
        this.savedStarTypeArray.fill('star_half', (this.rate - half), (this.rate + 1));
      }
    }
  }

  onMouseMove(event) {
    if (!this.readOnly) {
      const x = event.pageX - event.target.parentElement.offsetLeft;
      const pointer = x % (this.ICON_HALF_WIDTH * 2);
      const index = Math.floor(x / (this.ICON_HALF_WIDTH * 2));
      if (index < 5) {
        if (0 < pointer && pointer < this.ICON_HALF_WIDTH) {
          this.starTypeArray[index] = 'star_half';
          this.starTypeArray.fill('star', 0, index);
          this.starTypeArray.fill('star_border', index + 1);
        } else if (this.ICON_HALF_WIDTH <= pointer && pointer < this.ICON_HALF_WIDTH * 2) {
          this.starTypeArray[index] = 'star';
          this.starTypeArray.fill('star', 0, index);
          this.starTypeArray.fill('star_border', index + 1);
        } else {
          this.starTypeArray[index] = 'star_border';
        }
      }
    }
  }

  reset() {
    this.starTypeArray = [...this.savedStarTypeArray];
  }

  submitRate() {
    if (!this.readOnly) {
      this.rate = 0;
      this.savedStarTypeArray = [...this.starTypeArray];
      for (let i = 0; i < this.savedStarTypeArray.length; i++) {
        if (this.savedStarTypeArray[i] === 'star_border') {
          break;
        } else if (this.savedStarTypeArray[i] === 'star') {
          this.rate = this.rate + 1;
        } else if (this.savedStarTypeArray[i] === 'star_half') {
          this.rate = this.rate + 0.5;
        }
      }
      this.rateChange.emit(this.rate);
    }
  }
}
