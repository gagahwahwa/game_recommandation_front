import { Component, Input, OnDestroy, OnInit } from '@angular/core';

@Component({
    selector: 'app-review-input-bar',
    templateUrl: './review-input-bar.component.html',
    styleUrls: [ './review-input-bar.component.scss' ]
})
export class ReviewInputBarComponent implements OnInit, OnDestroy {
    @Input() isComment: boolean;
    isGood: boolean;

    constructor () {
    }

    ngOnInit () {
        this.isGood = null;
    }

    ngOnDestroy () {
        console.log( 'now' );
    }

    public clickReviewButton( state: boolean ) {
        if ( this.isGood === state ) {
            this.isGood = null;
            // todo :: delete game rate
        } else {
            this.isGood = state;
            // todo :: post game rate
        }
    }
}
