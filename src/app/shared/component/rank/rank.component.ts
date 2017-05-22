import { Component, Input, OnInit } from '@angular/core';
import { Observable } from "rxjs/Observable";

@Component({
    selector: 'app-rank',
    templateUrl: './rank.component.html',
    styleUrls: [ './rank.component.scss' ]
})
export class RankComponent implements OnInit {
    @Input() rankList: Observable<any>;

    constructor () {
    }

    ngOnInit () {
    }

}
