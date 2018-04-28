import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import 'rxjs/add/operator/map';
import { Observable } from 'rxjs/Observable';
import { GameDetailService } from '../shared/service/game-detail.service';

@Component({
  selector: 'app-game-detail',
  templateUrl: './game-detail.component.html',
  styleUrls: ['./game-detail.component.scss']
})

export class GameDetailComponent implements OnInit {

  recent3monthRate$: Observable<Array<any>>;
  allRate$: Observable<Array<any>>;
  userRate$: Observable<Array<any>>;
  gamedetailInfo$: Observable<any>;
  postingID: number;

  constructor(private gameService: GameDetailService, private route: ActivatedRoute) { // rout?
  }

  ngOnInit() {
    this.postingID = this.route.snapshot.params.gameId;

    this.gamedetailInfo$ = this.gameService.getGameInformation(this.postingID);
    this.recent3monthRate$ = this.gameService.getGame3monthRate(this.postingID);
    this.allRate$ = this.gameService.getGameRate(this.postingID);
    this.userRate$ = this.gameService.getGameUserRate();
  }

}
