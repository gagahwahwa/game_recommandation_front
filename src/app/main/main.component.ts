import { Component, OnDestroy, OnInit } from '@angular/core';
import { GameService } from "../shared/service/game.service";
import { Observable } from "rxjs/Observable";

@Component({
    selector: 'app-main',
    templateUrl: './main.component.html',
    styleUrls: [ './main.component.scss' ]
})
export class MainComponent implements OnInit {
    rankList$: Observable<any>;
    searchList$: Observable<any>;

    private limit: number;

    constructor (private gameService: GameService) {
        this.limit = 20;
    }

    ngOnInit () {
        this.rankList$ = this.gameService.getRankWithLimit( this.limit );
    }
}
