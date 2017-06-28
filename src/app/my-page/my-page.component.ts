import { Component, OnInit } from '@angular/core';
import 'rxjs/add/operator/distinct';
import 'rxjs/add/operator/mergeMap';
import 'rxjs/add/operator/toArray';
import { Observable } from 'rxjs/Observable';
import { GameService } from '../shared/service/game.service';
import { UserService } from '../shared/service/user.service';

@Component({
    selector: 'app-my-page',
    templateUrl: './my-page.component.html',
    styleUrls: [ './my-page.component.scss' ]
})
export class MyPageComponent implements OnInit {
    myUserId: number;
    gameRateList$: Observable<any>; gameRateList: Array<any>;
    tagList$: Observable<any>;
    gameDeveloperList$: Observable<any>;

    constructor (private userService: UserService, private gameService: GameService) {
    }

    ngOnInit () {
        this.myUserId = +sessionStorage.getItem('user_id');
        this.gameRateList$ = this.userService.getGameRateById(this.myUserId)
            .mergeMap( gameRateList => Observable.from( gameRateList ) )
            .distinct( (gameRate: any) => gameRate.id )
            .toArray();
        this.tagList$ = this.gameService.getTagByUserId(this.myUserId);
        this.gameDeveloperList$ = this.gameService.getGameDeveloperByUserId(this.myUserId);
    }
}
