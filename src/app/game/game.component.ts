import { Component, OnInit } from '@angular/core';
import { GameService } from "../shared/service/game.service";
import { ActivatedRoute } from "@angular/router";

@Component({
    selector: 'app-game',
    templateUrl: './game.component.html',
    styleUrls: [ './game.component.scss' ]
})
export class GameComponent implements OnInit {
    game: any;

    constructor (private gameService: GameService, private route: ActivatedRoute) {
    }

    ngOnInit () {
        this.route.params.subscribe(params => {
            this.game = this.gameService.getGameById(params[ 'id' ])
                    .subscribe( data => this.game = data );
        });
    }
}
