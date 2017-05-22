import { Component, Input, OnInit } from '@angular/core';

@Component({
    selector: 'app-review-input-bar',
    templateUrl: './review-input-bar.component.html',
    styleUrls: [ './review-input-bar.component.scss' ]
})
export class ReviewInputBarComponent implements OnInit {
    @Input() isComment: boolean;
    rate: number;

    constructor () {
    }

    ngOnInit () {
        this.rate = 0;
    }
}
