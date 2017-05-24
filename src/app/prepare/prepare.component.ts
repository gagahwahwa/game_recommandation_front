import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
    selector: 'app-prepare',
    templateUrl: './prepare.component.html',
    styleUrls: [ './prepare.component.scss' ]
})
export class PrepareComponent implements OnInit {
    selectedType: string;

    constructor (private router: Router) {
    }

    ngOnInit () {
        this.selectedType = this.router.url;
    }

}
