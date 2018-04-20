import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { ActivatedRoute, Router } from '@angular/router';
import { GameDetailService } from '../shared/service/game-detail.service';
import { Route } from '@angular/compiler/src/core';
import { Observer } from 'rxjs/Observer';
import 'rxjs/add/operator/map';

@Component({
  selector: 'app-game-detail',
  templateUrl: './game-detail.component.html',
  styleUrls: ['./game-detail.component.scss']
})

export class GameDetailComponent implements OnInit {

  constructor( private gameService: GameDetailService, private route: ActivatedRoute) { // rout?
  }

  recent3monthRate$: Observable<Array<any>>;
  allRate$: Observable<Array<any>>;
  userRate$: Observable<Array<any>>;
  gamedetailInfo$: Observable<Array<any>>;
  postingID: number;

  ngOnInit() {
    this.postingID = this.route.snapshot.params.id;

    this.gamedetailInfo$ = this.gameService.getGameInformation(this.postingID);
    this.recent3monthRate$ = this.gameService.getGame3monthRate(this.postingID);
    this.allRate$ = this.gameService.getGameRate(this.postingID);
    this.userRate$ = this.gameService.getGameUserRate();
  }

}
