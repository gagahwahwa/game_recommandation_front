import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import 'rxjs/add/observable/from';
import 'rxjs/add/operator/distinct';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/mergeMap';
import 'rxjs/add/operator/toArray';
import { Observable } from 'rxjs/Observable';
import { GameService } from '../../../shared/service/game.service';
import { UserService } from '../../../shared/service/user.service';
import { InitDataStoreService } from '../shared/store/init-data-store.service';

@Component({
  selector: 'app-init-data-step-2',
  templateUrl: './init-data-step-2.component.html',
  styleUrls: ['./init-data-step-2.component.scss']
})
export class InitDataStep2Component implements OnInit {
  gameList$: Observable<Array<any>>;
  count$: Observable<any>;

  constructor(public initDataStore: InitDataStoreService, private gameService: GameService, private userService: UserService, private router: Router) {
  }

  ngOnInit() {
    if (this.initDataStore.selectedTagList.length === 0) {
      this.router.navigateByUrl('/login');
    } else {
      this.gameList$ = this.gameService.getGameListByTagList(this.initDataStore.selectedTagList);
    }
  }

  changeRateCount(isChange: boolean) {
    if (isChange) {
      this.count$ = this.userService.getUserRateCount(+sessionStorage.getItem('id'));
    }
  }
}
