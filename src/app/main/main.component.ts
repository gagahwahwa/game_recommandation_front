import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { shareReplay } from 'rxjs/operators';
import { GameService } from '../shared/service/game.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {
  items: Array<any> = [];
  limit: number;
  rankList$: Observable<Array<any>>;

  constructor(private gameService: GameService, private router: Router) {
    this.items = [
      { url: 'assets/main/big1.jpg' },
      { url: 'assets/main/big2.jpg' },
      { url: 'assets/main/header3.jpg' },
      { url: 'assets/main/header4.jpg' },
      { url: 'assets/main/header5.jpg' }
    ];
   }

  ngOnInit() {
    this.limit = 20;
    this.rankList$ = this.gameService.getRankingGameList(this.limit).pipe(
      shareReplay()
    );
  }

  navigateToGameDetail(gameID: number) {
    this.router.navigate([`/game-detail/${gameID}`]);
  }
}
