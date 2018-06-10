import { Component, OnInit, Input, OnChanges } from '@angular/core';
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
export class MyPageComponent implements OnInit, OnChanges {
  @Input() LIMIT = 15;

  userID: number;
  selected: string;
  rateAvrate$: Observable<any>;
  rateCount$: Observable<any>;
  tags$: Observable<Array<any>>;
  ratedGameList$: Observable<Array<any>>;
  recommendGameList$: Observable<Array<any>>;

  start: number[];
  end: number[];
  indicatedNumbers: number[];
  max: number;

  constructor(private myPageService: MyPageService, private gameService: GameService, private route: ActivatedRoute) {
  }

  ngOnChanges() {

  }

  ngOnInit() {
    this.userID = this.route.snapshot.params.userId;
    this.selected = 'rated';
    this.rateAvrate$ = this.myPageService.getUserRateAverage(this.userID);
    this.rateCount$ = this.myPageService.getUserRateCount(this.userID).pipe(
      map((data: any) => data[0].count)
    );
    this.tags$ = this.myPageService.getTag(this.userID);
    this.ratedGameList$ = this.gameService.getGameListByUserId(this.userID).pipe(
      shareReplay()
    );
    this.recommendGameList$ = this.gameService.getRecommand(this.userID).pipe(
      shareReplay()
    );

    this.indicatedNumbers = new Array(11).fill(0); // 0 ~ 10
    this.ratedGameList$.subscribe((rates: any) => {
      rates.map((rate: any) => this.indicatedNumbers[rate.rate * 2]++);
      this.max = Math.max(...this.indicatedNumbers);
    });
  }

  changeRateCount(isChange: boolean) {
    if (isChange) {
      this.rateCount$ = this.myPageService.getUserRateCount(this.userID).pipe(
        map((data: any) => data[0].count));
    }
  }
  search(value: string) {
    if (value !== '') {
       this.router.navigate([`/search/tag/${value}`]);
      }
    }

}
