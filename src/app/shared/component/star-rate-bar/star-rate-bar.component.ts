import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
    selector: 'app-star-rate-bar',
    templateUrl: './star-rate-bar.component.html',
    styleUrls: [ './star-rate-bar.component.scss' ]
})
export class StarRateBarComponent implements OnInit {
    @Output() starRateEmitter = new EventEmitter<number>();
    @Input() rate: number;

    // UI 구성 변수
    starType: any;
    rateIterator: Array<any>;
    starRateMessageList: Array<string>;
    starRateMessage: string;

    // 로직 변수
    checked: Array<boolean>;

    constructor () {
        this.starType = {
            'false':'star_border',
            'true':'star'
        };
        this.rateIterator = new Array(5);
        this.starRateMessageList = [
            '',
            '싫어요',
            '별로에요',
            '보통이에요',
            '재미있어요',
            '최고예요'
        ];
        this.starRateMessage = this.starRateMessageList[0];

        this.checked = new Array(5).fill(false);
    }

    ngOnInit () {
    }

    public changeStarRate (rate: number) {
        this.checked.fill(false);
        this.checked.fill(true, 0, rate);
        this.starRateMessage = this.starRateMessageList[rate];
    }

    public submitStarRate (rate: number) {
        this.rate = rate;
        this.starRateEmitter.emit(this.rate);
    }

    public resetStarRate () {
        this.changeStarRate( this.rate );
    }
}
