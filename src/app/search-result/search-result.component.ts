import { Component, HostListener, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { map, mergeMap, shareReplay } from 'rxjs/operators';
import { GameService } from '../shared/service/game.service';

@Component({
  selector: 'app-search-result',
  templateUrl: './search-result.component.html',
  styleUrls: ['./search-result.component.scss'],
})
export class SearchResultComponent implements OnInit {
  type: string;
  keyword$: Observable<any>;
  searchedGames: any[];
  searchedGamesCount: number;
  currentPage: number;
  lastScrollHeight: number;
  count: number;

  constructor(private gameService: GameService, private route: ActivatedRoute) {
  }

  ngOnInit() {
    this.currentPage = 1;
    this.lastScrollHeight = 0;

    this.type = this.route.snapshot.url[0].path;
    this.keyword$ = this.route.params.pipe(
      map((param: any) => param.keyword),
      shareReplay()
    );
    this.keyword$.pipe(
      mergeMap((keyword: string) => this.gameService.searchGame(this.type, keyword)),
      shareReplay()
    ).subscribe((list: any) => {
      this.searchedGames = list;
      this.searchedGamesCount = list.count;
    });
  }

  changeRateCount(info: any) {
    if (info.rate) {
      this.searchedGames[info.index] = {...this.searchedGames[info.index], rate: info.rate};
    }
  }

  @HostListener('window:scroll', ['$event'])
  next(event: any) {
    const windowHeight = event.target.scrollingElement.clientHeight;
    const scrollableHeight = event.target.scrollingElement.scrollHeight;
    const currentHeight = event.target.scrollingElement.scrollTop;
    if (currentHeight === 0) {
      this.currentPage = 1;
      this.lastScrollHeight = 0;
    } else if (scrollableHeight - windowHeight * 0.2 < currentHeight + windowHeight && this.lastScrollHeight < currentHeight + windowHeight) {
      this.lastScrollHeight = currentHeight + windowHeight;
      this.currentPage++;
    }
  }
}
