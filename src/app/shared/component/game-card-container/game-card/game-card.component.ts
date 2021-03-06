import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { DomSanitizer, SafeStyle } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { isNullOrUndefined } from 'util';
import { RateService } from '../../../service/rate.service';

@Component({
  selector: 'app-game-card',
  templateUrl: './game-card.component.html',
  styleUrls: ['./game-card.component.scss']
})
export class GameCardComponent implements OnInit {
  @Input() game: any;
  @Output() rateCountChange = new EventEmitter<number>();
  thumbnail: SafeStyle;
  isStarRateBarShown: boolean;
  rate: number;

  constructor(private rateService: RateService, private router: Router, private sanitizer: DomSanitizer) {
  }

  ngOnInit() {
    this.isStarRateBarShown = false;
    this.rate = isNullOrUndefined(this.game.rate) ? null : this.game.rate;
    this.thumbnail = this.sanitizer.bypassSecurityTrustStyle(`url(assets/thumbnail/${this.game.url}.jpg), url(assets/header.jpg)`);
  }

  rateChange(rate: number) {
    this.rate = rate;
    this.rateService
      .postRate({
        game_id: this.game.id,
        user_id: sessionStorage.getItem('id'),
        rate: this.rate
      })
      .subscribe((res: any) => {
        if (res.result === 'success') {
          this.rateCountChange.emit(rate);
        } else {
          alert(res.msg);
        }
      });
  }

  navigateToGame(gameId: number) {
    if (this.router.url !== '/sign-up/init-data/2') {
      this.router.navigateByUrl(`/game-detail/${gameId}`);
    }
  }
}
