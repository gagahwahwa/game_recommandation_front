import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { GameService } from '../shared/service/game.service';

@Component({
  selector: 'app-search-result',
  templateUrl: './search-result.component.html',
  styleUrls: ['./search-result.component.scss']
})
export class SearchResultComponent implements OnInit {
  type: string;
  keyword: string;
  searchedGames$: Observable<Array<any>>;

  constructor(private gameService: GameService, private route: ActivatedRoute) {
  }

  ngOnInit() {
    this.type = this.route.snapshot.url[0].path;
    this.keyword = this.route.snapshot.params.keyword;
    this.searchedGames$ = this.gameService.searchGame(this.type, this.keyword);
  }
}
