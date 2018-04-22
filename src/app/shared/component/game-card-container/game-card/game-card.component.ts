import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { InitDataStoreService } from '../../../../sign-up/init-data/shared/store/init-data-store.service';
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

  constructor(private rateService: RateService, private initStore: InitDataStoreService, private router: Router) {
  }

  ngOnInit() {
    this.isStarRateBarShown = false;
  }

  rateChange(rate: number) {
    this.rate = rate;
    this.rateService.postRate({
      game_id: this.game.id,
      user_id: sessionStorage.getItem('id'),
      rate: this.rate
    }).subscribe((res: any) => {
      if (
        this.router.url === '/sign-up/init-data/2'
        && res.result === 'success'
        && res.data.affectedRows === 1
      ) {
        this.initStore.ratingCount++;
      }
    });
  }
}
