import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { GameService } from '../shared/service/game.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {
  items: Array<any> = [];
  rankList$: Observable<Array<any>>;
  constructor(private gameService: GameService) {
    this.items = [
      { url: 'assets/main/big1.jpg' },
      { url: 'assets/main/big2.jpg' },
      { url: 'assets/main/header3.jpg' },
      { url: 'assets/main/header4.jpg' },
      { url: 'assets/main/header5.jpg' }
    ];
   }

  ngOnInit() {
    this.rankList$ = this.gameService.getRankingGameList(10);
  }

}
