import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { isUndefined } from 'util';
import { GameService } from '../shared/service/game.service';

@Component({
    selector: 'app-game',
    templateUrl: './game.component.html',
    styleUrls: [ './game.component.scss' ]
})
export class GameComponent implements OnInit {
    game: any;
    tagList$: Observable<any>;
    gameRateAVG: any;
    collaborateFilterRate: number;

    constructor (private gameService: GameService, private route: ActivatedRoute) {
        this.collaborateFilterRate = -1;
    }

    ngOnInit () {
        this.route.params.subscribe(params => {
            this.gameService.getGameByParameter('url', params[ 'url' ])
                .subscribe(data => {
                    this.game = data;
                    this.tagList$ = this.gameService.getTagByGameId(this.game.id);
                    this.gameService.getGameRateAVGById(this.game.id)
                        .subscribe(data => {
                            if ( isUndefined(data) ) {
                                this.gameRateAVG = {
                                    rate_avg: 0,
                                    rate_count: 0,
                                    rate_avg_3_month: 0,
                                    rate_count_3_month: 0
                                };
                            } else {
                                this.gameRateAVG = data;
                            }
                        });
                    this.gameService.getCollaborateFilter(this.game.id, 30)
                        .subscribe(data => data < 5 ? this.collaborateFilterRate = data : this.collaborateFilterRate = 5);
                });
        });
    }
}
