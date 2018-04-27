import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/reduce';
import { Observable } from 'rxjs/Observable';
import { GameDetailService } from '../shared/service/game-detail.service';


@Component({
  selector: 'app-game-detail',
  templateUrl: './game-detail.component.html',
  styleUrls: ['./game-detail.component.scss']
})

export class GameDetailComponent implements OnInit {

  // recent3monthRate$: Observable<any>;
  gameRate$: Observable<Array<any>>;
  userRate$: Observable<Array<any>>;
  gamedetailInfo$: Observable<Array<any>>;
  gameTag$: Observable<Array<any>>;
  predictRate$: Observable<Array<any>>;
  postingID: number;
  allrate: number;
  userrate: number;
  gurl: string;

  constructor(private gameService: GameDetailService, private route: ActivatedRoute) { // rout?
  }
  ngOnInit() {
    this.allrate = 0;
    this.postingID = this.route.snapshot.params.gameId;

    this.gamedetailInfo$ = this.gameService.getGameInformation(this.postingID);
    this.gameRate$ = this.gameService.getGameRate(this.postingID);
    this.userRate$ = this.gameService.getGameUserRate();
    this.gameTag$ = this.gameService.getGameTag(this.postingID);
    this.predictRate$ = this.gameService.getGamePredictScore(this.postingID);
    // this.ratenum = this.gameService.getAvgRate(this.postingID);
    // this.gurl = this.gameService.gethttp();
   // this.recent3monthRate$ = this.gameService.getGame3monthRate(this.postingID);
  }
}

  /*av_rate(): void {
    this.userRate$.forEach();
  }
  us_rate(rateInfo: Observable<Array<any>>): number {
    this.ratenum = 0;

    rateInfo.forEach(element => {
      this.ratenum += rateInfo.rate;
    });
    return this.ratenum;
  }
  rate(rateInfo: Observable<Array<any>>): number {
    this.ratenum = 0;

    rateInfo.forEach(element => {
      this.ratenum += rateInfo.rate;
    });
    return this.ratenum;
  }

*/
