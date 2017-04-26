import { Component, OnInit } from '@angular/core';
import { GameService } from "../shared/service/game.service";
import { Observable } from "rxjs/Observable";

@Component({
    selector: 'app-main',
    templateUrl: './main.component.html',
    styleUrls: [ './main.component.scss' ]
})
export class MainComponent implements OnInit {
    gameList$: Observable<any>;

    constructor (private gameService: GameService) {
    }

    ngOnInit () {
        this.gameList$ = this.gameService.getGameListAll();
    }
}
