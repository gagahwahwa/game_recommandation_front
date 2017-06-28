import { Component, Input, OnInit } from '@angular/core';

@Component({
    selector: 'app-gamerate-counter',
    templateUrl: './gamerate-counter.component.html',
    styleUrls: [ './gamerate-counter.component.scss' ]
})
export class GamerateCounterComponent implements OnInit {
    @Input() count: number;
    @Input() limit: number;

    constructor () {
        this.limit = 10;
    }

    ngOnInit () {
    }
}
