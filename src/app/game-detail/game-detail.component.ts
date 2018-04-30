import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { map, shareReplay } from 'rxjs/operators';
import { GameDetailService } from '../shared/service/game-detail.service';


@Component({
  selector: 'app-game-detail',
  templateUrl: './game-detail.component.html',
  styleUrls: ['./game-detail.component.scss']
})

export class GameDetailComponent implements OnInit {
  gameId: number;
  userId: number;
  gameInfo$: Observable<any>;
  predictRate$: Observable<any>;
  myRate$: Observable<any>;
  rateAvarage$: Observable<any>;
  tags$: Observable<Array<any>>;

  constructor(private gameService: GameDetailService, private route: ActivatedRoute) {
  }

  ngOnInit() {
    this.gameId = +this.route.snapshot.params.gameId;
    this.userId = +sessionStorage.getItem('id');
    this.gameInfo$ = this.gameService.getGameInformation(this.gameId).pipe(
      map((data: any) => data[0])
    );
    this.predictRate$ = this.gameService.getGamePredictScore(this.gameId, this.userId);
    this.myRate$ = this.gameService.getGameUserRate(this.userId).pipe(
      map((data: any) => data.filter((item: any) => item.id === this.gameId)[0]),
    );
    this.rateAvarage$ = this.gameService.getGameRateAvg(this.gameId).pipe(
      map((data: any) => data[0]),
      shareReplay()
    );
    this.tags$ = this.gameService.getGameTag(this.gameId);
  }
}
