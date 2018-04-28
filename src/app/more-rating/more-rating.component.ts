import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { GameService } from '../shared/service/game.service';
import { UserService } from '../shared/service/user.service';

@Component({
  selector: 'app-more-rating',
  templateUrl: './more-rating.component.html',
  styleUrls: ['./more-rating.component.scss']
})
export class MoreRatingComponent implements OnInit {
  gameList$: Observable<Array<any>>;
  count$: Observable<any>;

  constructor(private gameService: GameService, private userSerivce: UserService) {
  }

  ngOnInit() {
    this.gameList$ = this.gameService.getGameList(200);
    this.count$ = this.userSerivce.getUserRateCount(+sessionStorage.getItem('id'));
  }

  changeRateCount(isChange: boolean) {
    if (isChange) {
      this.count$ = this.userSerivce.getUserRateCount(+sessionStorage.getItem('id'));
    }
  }
}
