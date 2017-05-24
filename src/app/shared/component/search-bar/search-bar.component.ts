import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormControl } from '@angular/forms';
import { GameService } from 'app/shared/service/game.service';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/distinctUntilChanged';
import 'rxjs/add/operator/filter';
import 'rxjs/add/operator/switchMap';

@Component({
    selector: 'app-search-bar',
    templateUrl: './search-bar.component.html',
    styleUrls: [ './search-bar.component.scss' ]
})

export class SearchBarComponent implements OnInit {
    @Output() searchResultEmitter = new EventEmitter<any>();
    keyword = new FormControl();

    constructor (private gameService: GameService) {
    }

    ngOnInit () {
        this.searchResultEmitter.emit(
            this.keyword.valueChanges
                .debounceTime(700)
                .distinctUntilChanged()
                .filter(keyword => keyword !== '')
                .switchMap(keyword => {
                    return this.gameService.getGameByParameter('title', keyword)
                })
        );
    }
}
