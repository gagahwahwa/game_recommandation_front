import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import 'rxjs/add/operator/mergeMap';
import { GameService } from '../shared/service/game.service';
import { Observable } from 'rxjs/Observable';

@Component({
    selector: 'app-filtered-game-list',
    templateUrl: './filtered-game-list.component.html',
    styleUrls: [ './filtered-game-list.component.scss' ]
})
export class FilteredGameListComponent implements OnInit {
    tagName: string;
    gameList$: Observable<any>;

    constructor (private gameService: GameService,
                 private route: ActivatedRoute) {
    }

    ngOnInit () {
        this.route.params.subscribe(params => {
            this.tagName = params.name;
            this.gameList$ = this.gameService.getGameByParameter('tag', this.tagName);
        });
    }

}
