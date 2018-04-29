import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { map } from 'rxjs/operators';
import { GameService } from '../shared/service/game.service';
import { MyPageService } from '../shared/service/my-page.service';

@Component({
  selector: 'app-my-page',
  templateUrl: './my-page.component.html',
  styleUrls: ['./my-page.component.scss']
})
export class MyPageComponent implements OnInit {
  userID: number;
  selected: string;
  rateAvrate$: Observable<any>;
  rateCount$: Observable<any>;
  tags$: Observable<Array<any>>;
  ratedGameList$: Observable<Array<any>>;
  recommendGameList$: Observable<Array<any>>;

  constructor(private myPageService: MyPageService, private gameService: GameService, private route: ActivatedRoute) {
  }

  ngOnInit() {
    this.userID = this.route.snapshot.params.userId;
    this.selected = 'rated';
    this.rateAvrate$ = this.myPageService.getUserRateAverage(this.userID);
    this.rateCount$ = this.myPageService.getUserRateCount(this.userID).pipe(
      map((data: any) => data[0].count)
    );
    this.tags$ = this.myPageService.getTag(this.userID);
    this.ratedGameList$ = this.gameService.getGameListByUserId(this.userID);
    this.recommendGameList$ = this.gameService.getGameList(20);
  }

}
