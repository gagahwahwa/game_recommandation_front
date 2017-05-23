import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { isUndefined } from 'util';
import { GameService } from '../shared/service/game.service';
import 'rxjs/add/observable/never';

@Component({
    selector: 'app-game',
    templateUrl: './game.component.html',
    styleUrls: [ './game.component.scss' ]
})
export class GameComponent implements OnInit {
    game: any;
    tagList$: Observable<any>;
    gameRateAVG$: Observable<any>; gameRateAVG: any;
    collaborateFilterRate$: Observable<number>; collaborateFilterRate: number;

    constructor (private gameService: GameService, private route: ActivatedRoute) {
    }

    ngOnInit () {
        this.route.params.subscribe(params => {
            this.gameService.getGameByParameter('url', params[ 'url' ])
                .subscribe(data => {
                    this.game = data;
                    this.tagList$ = this.gameService.getTagByGameId(this.game.id);
                    this.gameRateAVG$ = this.gameService.getGameRateAVGById(this.game.id)
                        .map(data => {
                            if ( isUndefined(data) ) {
                                return {
                                    rate_avg: 0,
                                    rate_count: 0,
                                    rate_avg_3_month: 0,
                                    rate_count_3_month: 0
                                };
                            } else {
                                if ( data.rate_avg_3_month === null ) {
                                    data.rate_avg_3_month = 0;
                                }
                                if ( data.rate_count_3_month === null ) {
                                    data.rate_count_3_month = 0;
                                }
                                return data;
                            }
                        });
                    this.collaborateFilterRate$ = this.gameService.getCollaborateFilter(this.game.id, 30)
                        .map(data => data < 5 ? data : 5);
                });
        });
    }
}
