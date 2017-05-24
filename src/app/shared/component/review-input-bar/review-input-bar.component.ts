import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
    selector: 'app-review-input-bar',
    templateUrl: './review-input-bar.component.html',
    styleUrls: [ './review-input-bar.component.scss' ]
})
export class ReviewInputBarComponent implements OnInit {
    @Input() isComment: boolean;
    @Output() rateOutput = new EventEmitter<any>();

    rate: number;
    comment: FormControl;

    constructor () {
        this.comment = new FormControl('');
    }

    ngOnInit () {
        this.rate = 0;
    }

    public emitRateData () {
        this.rateOutput.emit({
            rate: this.rate,
            comment: this.comment.value
        });
    }
}
