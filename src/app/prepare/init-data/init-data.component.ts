import { Component, OnInit } from '@angular/core';
import * as moment from 'moment';
import 'rxjs/add/observable/from';
import 'rxjs/add/operator/mergeMap';
import 'rxjs/add/operator/distinct';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/toArray';
import { Observable } from 'rxjs/Observable';
import { GameService } from '../../shared/service/game.service';
import { Router } from '@angular/router';

@Component({
    selector: 'app-init-data',
    templateUrl: './init-data.component.html',
    styleUrls: [ './init-data.component.scss' ]
})
export class InitDataComponent implements OnInit {

    tagList$: Observable<any>;
    isSelected: Array<number>;

    isShowGameList: boolean;
    gameList$: Observable<any>;
    end: number;

    selectedGameCount: number;

    constructor (private gameService: GameService, private router: Router) {
        this.isSelected = [];
    }

    ngOnInit () {
        this.tagList$ = this.gameService.getTagList();
        this.end = 21;
        this.selectedGameCount = 0;
    }

    public selectTag (index: number, tagId: number) {
        if ( this.isSelected[ index ] > 0 ) {
            this.isSelected[ index ] = 0;
        } else {
            this.isSelected[ index ] = tagId;
        }

        let gameTagList = this.isSelected.filter(tagId => tagId > 0);
        if ( gameTagList.length === 5 ) {
            this.gameList$ = Observable.from(gameTagList)
                .mergeMap(tagId => this.gameService.getGameByTagId(tagId))
                .mergeMap(gameList => Observable.from(gameList))
                .distinct((game: any) => game.title)
                .toArray();
            this.isShowGameList = true;
        }
    }

    public loadMore () {
        this.end = this.end + 21;
    }

    public submitStarRate (game: any, rate: number) {
        let temp = {
            game_id: game.id,
            user_id: sessionStorage.getItem('user_id'),
            rate: rate,
            regi_date: moment().format('YYYY-MM-DD'),
            comment: ''
        };

        this.gameService.setGameRateById(temp).subscribe(res => {
            if ( res.result === 'success' ) {
                this.selectedGameCount = this.selectedGameCount + 1;
                if ( this.selectedGameCount === 20 ) {
                    this.router.navigate(['/main']);
                }
            }
        });
    }
}
