import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
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
  keywordForm: FormGroup;

  constructor(private gameService: GameService, private router: Router, private fb: FormBuilder) {
    this.items = [
      { url: 'assets/main/big1.jpg' },
      { url: 'assets/main/big2.jpg' },
      { url: 'assets/main/header3.jpg' },
      { url: 'assets/main/header4.jpg' },
      { url: 'assets/main/header5.jpg' }
    ];
   }

  ngOnInit() {
    this.keywordForm = this.fb.group({
      keyword: ['']
    });
    this.limit = 20;
    this.rankList$ = this.gameService.getRankingGameList(this.limit).pipe(
      shareReplay()
    );
  }

  navigateToGameDetail(gameID: number) {
    this.router.navigate([`/game-detail/${gameID}`]);
  }

  search(form: FormGroup) {
    // if value invlolve #, then split
    const inputValue = form.controls.keyword.value;
    if (inputValue.search('#') !== -1 ) {
      const realValue = inputValue.split('#');
      this.router.navigate([`/search/tag/${realValue[1]}`]);
    } else {
      this.router.navigate([`/search/game/${form.controls.keyword.value}`]);
    }
  }

}
