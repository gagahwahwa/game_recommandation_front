import { Component, ElementRef, EventEmitter, Input, OnChanges, Output, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-game-card-container',
  templateUrl: './game-card-container.component.html',
  styleUrls: ['./game-card-container.component.scss']
})
export class GameCardContainerComponent implements OnChanges {
  @Input() gameList: Array<any>;
  @Output() rateCountChange = new EventEmitter();
  row: number;
  rowMaker: Array<any>;
  flex: string;

  constructor(private containerRef: ElementRef) {
  }

  ngOnChanges(changes: SimpleChanges) {
    if (changes.gameList.previousValue) {
      if (changes.gameList.previousValue.length !== changes.gameList.currentValue.length) { // change page
        this.rowMaker = new Array(this.row);
        for (let i = 0; i < this.rowMaker.length; i++) {
          this.rowMaker[i] = this.gameList.filter((value, j) => j % this.row === i);
        }
      }
      if (JSON.stringify(changes.gameList.previousValue) !== JSON.stringify(changes.gameList.currentValue)) {
        this.rowMaker = new Array(this.row);
        for (let i = 0; i < this.rowMaker.length; i++) {
          this.rowMaker[i] = this.gameList.filter((value, j) => j % this.row === i);
        }
      }
    } else { // init
      this.row = Math.floor(this.containerRef.nativeElement.clientWidth / 325);
      this.flex = `1 1 calc(100% / ${this.row} - .5rem)`;
      this.rowMaker = new Array(this.row);
      for (let i = 0; i < this.rowMaker.length; i++) {
        this.rowMaker[i] = this.gameList.filter((value, j) => j % this.row === i);
      }
    }
  }
}
