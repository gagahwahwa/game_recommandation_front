import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import * as moment from 'moment';
import { Observable } from 'rxjs/Observable';
import { isUndefined } from 'util';
import { GameService } from '../shared/service/game.service';
import 'rxjs/add/operator/share';

@Component({
    selector: 'app-game',
    templateUrl: './game.component.html',
    styleUrls: [ './game.component.scss' ]
})
export class GameComponent implements OnInit {
    game: any;

    tagList$: Observable<any>;
    gameRateList$: Observable<any>;

    gameRateAVG$: Observable<any>;
    gameRateAVG: any;
    collaborateFilterRate$: Observable<number>;
    collaborateFilterRate: number;

    // 예상 점수를 낼 수 없을 때 오는 점수.
    CAN_NOT_COMPUTE: number;

    private user_id: number;
    constructor (private gameService: GameService, private route: ActivatedRoute) {
    }

    ngOnInit () {
        this.user_id = +sessionStorage.getItem('user_id');
        this.CAN_NOT_COMPUTE = -999;

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
                    this.collaborateFilterRate$ = this.gameService.getCollaborateFilter(this.game.id, this.user_id)
                        .map(data => data !== -999 && data < 0 ? 0 : data ) // -999는 예상 점수를 낼 수 없는 상태, 나머지 음수는 0으로 처리
                        .map(data => data < 5 ? data : 5); // 5점 이상은 5점으로 처리

                    this.gameRateList$ = this.gameService.getGameRateById(this.game.id)
                        .map(list => list.filter(data => data.comment !== '' && data.comment !== null));
                });
        });
    }

    public enrollGameRate (data: any) {
        let temp = {
            game_id: this.game.id,
            user_id: sessionStorage.getItem('user_id'),
            rate: data.rate,
            regi_date: moment().format('YYYY-MM-DD'),
            comment: data.comment
        };

        this.gameService.setGameRateById(temp).subscribe(res => {
            if ( res.result === 'success' ) {
                this.gameRateList$ = this.gameService.getGameRateById(this.game.id)
                    .map(list => list.filter(data => data.comment !== '' && data.comment !== null));
            }
        });
    }
}
