import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { ActivatedRoute, Router } from '@angular/router';
import { GameDetailService } from '../shared/service/game-detail.service';
import { Route } from '@angular/compiler/src/core';

@Component({
  selector: 'app-game-detail',
  templateUrl: './game-detail.component.html',
  styleUrls: ['./game-detail.component.scss']
})

export class GameDetailComponent implements OnInit {

  constructor() { // rout?
   }

  recent3monthRate$: Observable<any>;
  postingID: number;
  ngOnInit() {
    //this.postingID = this.route.snapshot.params.id;
    //this.recent3monthRate$ = this.getGame3monthRate(this.postingID);
  }

}
