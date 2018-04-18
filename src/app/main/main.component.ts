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
  ranks: Array<any> = [];
  rank1game: any;

  gameList$: Observable<Array<any>>;
  constructor(private gameService: GameService) {
    this.items = [
      { url: 'assets/main/big1.jpg' },
      { url: 'assets/main/big2.jpg' },
      { url: 'assets/main/header3.jpg' },
      { url: 'assets/main/header4.jpg' },
      { url: 'assets/main/header5.jpg' }
    ];

    // Backend에서 랭킹 불러와서 ranks
   }

  ngOnInit() {
      // this.gameList$ = this.gameService.getTop20GameList();

      // this.rank1game = this.gameList$[0];
  }

}
