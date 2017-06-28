import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import 'rxjs/add/operator/mergeMap';
import { Observable } from 'rxjs/Observable';
import { GameService } from '../shared/service/game.service';

@Component({
    selector: 'app-game-list',
    templateUrl: './game-list.component.html',
    styleUrls: [ './game-list.component.scss' ]
})
export class GameListComponent implements OnInit {
    gameList$: Observable<any>;

    constructor (private gameService: GameService,
                 private route: ActivatedRoute) {
    }

    ngOnInit () {
        this.gameList$ =
            this.route.params.mergeMap(params =>
                this.gameService.getGameByParameter('tag_name', params.name)
            );
    }
}
