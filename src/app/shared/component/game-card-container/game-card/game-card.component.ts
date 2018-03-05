import { Component, Input, OnInit } from '@angular/core';
import { RateService } from '../../../service/rate.service';

@Component({
  selector: 'app-game-card',
  templateUrl: './game-card.component.html',
  styleUrls: ['./game-card.component.scss']
})
export class GameCardComponent implements OnInit {
  @Input() game: any;
  isStarRateBarShown: boolean;
  rate: number;

  constructor(private rateService: RateService) {
  }

  ngOnInit() {
    this.isStarRateBarShown = false;
  }

  rateChange(rate: number) {
    this.rate = rate;
    this.rateService.postRate({game_id: this.game.id, user_id: sessionStorage.getItem('id'), rate: this.rate}).subscribe();
  }
}
