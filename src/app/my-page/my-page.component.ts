import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/reduce';
import { Observable } from 'rxjs/Observable';
import { MyPageService } from '../shared/service/my-page.service';
import { GameService } from '../shared/service/game.service';

@Component({
  selector: 'app-my-page',
  templateUrl: './my-page.component.html',
  styleUrls: ['./my-page.component.scss']
})
export class MyPageComponent implements OnInit {
  userID: number;
  userRateAverage$: Observable<any>;
  userRateCount$: Observable<any>;

  userTag$: Observable<Array<any>>;
  gameList$: Observable<Array<any>>;
  tagGameList$: Observable<Array<any>>;
  constructor(private myPageService: MyPageService, private gameService: GameService, private route: ActivatedRoute) { }

  ngOnInit() {
    this.userID = this.route.snapshot.params.userId;
    this.userRateAverage$ = this.myPageService.getUserRateAverage(this.userID);
    this.userRateCount$ = this.myPageService.getUserRateCount(this.userID);
    this.userTag$ = this.myPageService.getTag(this.userID);
    this.gameList$ = this.gameService.getGameList(20);
    //this.tagGameList$ = this.gameService.getGameListByTagList();
  }

}
