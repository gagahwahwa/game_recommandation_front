import { Component, Input, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';

@Component({
    selector: 'app-tag-bar',
    templateUrl: './tag-bar.component.html',
    styleUrls: [ './tag-bar.component.scss' ]
})
export class TagBarComponent implements OnInit {
    @Input() tagList: Observable<any>;

    constructor () {
    }

    ngOnInit () {
    }
}
