import { Component, Input, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';

@Component({
    selector: 'app-game-list',
    templateUrl: './game-list.component.html',
    styleUrls: [ './game-list.component.scss' ]
})
export class GameListComponent implements OnInit {
    @Input() gameList$: Observable<any>;
    end: number;

    constructor () {
    }

    ngOnInit () {
        this.end = 21;
    }

    public loadMore () {
        this.end = this.end + 21;
    }

}
