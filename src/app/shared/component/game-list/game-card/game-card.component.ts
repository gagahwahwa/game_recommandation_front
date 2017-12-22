import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
    selector: 'app-game-card',
    templateUrl: './game-card.component.html',
    styleUrls: [ './game-card.component.scss' ]
})
export class GameCardComponent implements OnInit {
    @Input() game: any;
    @Input() canClick: boolean;

    constructor (private router: Router) {
        this.canClick = false;
    }

    ngOnInit () {
    }


    navigate( url ) {
        if ( this.canClick ) {
            this.router.navigate(['/game', url]);
        }
    }

    submitStarRate(game, $event) {

    }
}
