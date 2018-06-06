import { Component, HostListener, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { GameService } from '../shared/service/game.service';
import { UserService } from '../shared/service/user.service';

@Component({
  selector: 'app-more-rating',
  templateUrl: './more-rating.component.html',
  styleUrls: ['./more-rating.component.scss']
})
export class MoreRatingComponent implements OnInit {
  gameList$: Observable<Array<any>>;
  count$: Observable<any>;
  currentPage: number;
  lastScrollHeight: number;

  constructor(private gameService: GameService, private userSerivce: UserService) {
  }

  ngOnInit() {
    this.currentPage = 1;
    this.lastScrollHeight = 0;


    this.gameList$ = this.gameService.getMoreRatingList(+sessionStorage.getItem('id'));
    this.count$ = this.userSerivce.getUserRateCount(+sessionStorage.getItem('id'));
  }

  changeRateCount(isChange: boolean) {
    if (isChange) {
      this.count$ = this.userSerivce.getUserRateCount(+sessionStorage.getItem('id'));
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
