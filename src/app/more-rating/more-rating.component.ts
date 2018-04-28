import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { GameService } from '../shared/service/game.service';

@Component({
  selector: 'app-more-rating',
  templateUrl: './more-rating.component.html',
  styleUrls: ['./more-rating.component.scss']
})
export class MoreRatingComponent implements OnInit {
  gameList$: Observable<Array<any>>;

  constructor(private gameService: GameService) {
  }

  ngOnInit() {
    this.gameList$ = this.gameService.getGameList(200);
  }

}
