import { Component, OnInit } from '@angular/core';
import 'rxjs/add/operator/count';
import 'rxjs/add/operator/share';
import 'rxjs/add/operator/mergeMap';
import 'rxjs/add/observable/from';
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

    constructor (private userService: UserService, private gameService: GameService) {
    }

    ngOnInit () {
        this.myUserId = +sessionStorage.getItem('user_id');
        this.gameRateList$ = this.userService.getGameRateById(this.myUserId);
        this.tagList$ = this.gameService.getTagByUserId(this.myUserId);
    }
}
