import { Component, OnInit } from '@angular/core';
import 'rxjs/add/observable/from';
import 'rxjs/add/operator/mergeMap';
import { Observable } from 'rxjs/Observable';
import { GameService } from '../../../shared/service/game.service';
import { InitDataStoreService } from '../shared/store/init-data-store.service';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/distinct';
import 'rxjs/add/operator/toArray';

@Component({
  selector: 'app-init-data-step-2',
  templateUrl: './init-data-step-2.component.html',
  styleUrls: ['./init-data-step-2.component.scss']
})
export class InitDataStep2Component implements OnInit {
  gameList$: Observable<Array<any>>;

  constructor(private initDataStore: InitDataStoreService, private gameService: GameService) {
  }

  ngOnInit() {
    this.gameList$ = Observable.from(this.initDataStore.selectedTagList)
      .mergeMap((tag: any) => this.gameService.getGameListByTagId(tag.id))
      .mergeMap(gameList => Observable.from(gameList))
      .distinct((game: any) => game.title)
      .toArray();
  }

}
