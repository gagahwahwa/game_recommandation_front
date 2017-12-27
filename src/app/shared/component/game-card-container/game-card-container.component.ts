import { Component, ElementRef, Input, OnChanges, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-game-card-container',
  templateUrl: './game-card-container.component.html',
  styleUrls: ['./game-card-container.component.scss']
})
export class GameCardContainerComponent implements OnChanges {
  @Input() gameList: Array<any>;
  row: number;
  rowMaker: Array<any>;

  constructor(private containerRef: ElementRef) {
  }

  ngOnChanges(changes: SimpleChanges) {
    if (changes.gameList.isFirstChange()) {
      this.row = Math.floor(this.containerRef.nativeElement.clientWidth / 325);
      this.gameList = changes.gameList.currentValue;
      this.rowMaker = new Array(this.row);
      for (let i = 0; i < this.rowMaker.length; i++) {
        this.rowMaker[i] = this.gameList.filter((value, j) => j % this.row === i);
      }
    }
  }
}
