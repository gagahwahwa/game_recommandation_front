import { Component, HostListener, OnChanges, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { GameService } from '../shared/service/game.service';

@Component({
  selector: 'app-search-result',
  templateUrl: './search-result.component.html',
  styleUrls: ['./search-result.component.scss']
})
export class SearchResultComponent implements OnInit, OnChanges {
  type: string;
  keyword: string;
  searchedGames$: Observable<Array<any>>;
  currentPage: number;

  constructor(private gameService: GameService, private route: ActivatedRoute) {
  }

  ngOnChanges() {
    console.log(this.currentPage);
  }

  ngOnInit() {
    this.type = this.route.snapshot.url[0].path;
    this.keyword = this.route.snapshot.params.keyword;
    this.searchedGames$ = this.gameService.searchGame(this.type, this.keyword);
    this.currentPage = 1;
  }

  @HostListener('window:scroll', ['$event'])
  next(event: any) {
    const windowHeight = event.target.scrollingElement.clientHeight;
    const scrollableHeight = event.target.scrollingElement.scrollHeight;
    const currentHeight = event.target.scrollingElement.scrollTop;
    if (scrollableHeight * 0.8 < currentHeight + windowHeight) {
      this.currentPage++;
    }
  }
}
