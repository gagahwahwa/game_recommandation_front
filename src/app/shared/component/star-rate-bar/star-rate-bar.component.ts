import { ChangeDetectionStrategy, Component, EventEmitter, OnInit, Output } from '@angular/core';
import { InitDataStoreService } from '../../../sign-up/init-data/shared/store/init-data-store.service';

@Component({
  selector: 'app-star-rate-bar',
  templateUrl: './star-rate-bar.component.html',
  styleUrls: ['./star-rate-bar.component.scss'],
  changeDetection: ChangeDetectionStrategy.Default
})

export class StarRateBarComponent implements OnInit {
  @Output() rateChange = new EventEmitter<number>();
  rate: number;
  starArray: Array<number>;
  starTypeArray: Array<string>;
  savedStarTypeArray: Array<string>;

  private ICON_HALF_WIDTH = 12;

  constructor(private initDataStore: InitDataStoreService) {
  }

  ngOnInit() {
    this.starArray = new Array(5);
    this.starTypeArray = new Array(5).fill('star_border');
    this.savedStarTypeArray = new Array(5).fill('star_border');
  }

  onMouseMove(event) {
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

  reset() {
    this.starTypeArray = [...this.savedStarTypeArray];
  }

  submitRate() {
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
    this.initDataStore.ratingCount = this.initDataStore.ratingCount + 1;
  }
}
