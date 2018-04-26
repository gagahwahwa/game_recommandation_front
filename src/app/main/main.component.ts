import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
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
    this.rankList$ = this.gameService.getRankingGameList(10);
  }

  gameClick(gameID: number) {
    this.router.navigate([`/game-detail/${gameID}`]);
  }

  searchClick(form: FormGroup) {
    this.router.navigate([`/game-detail/${form.controls.keyword.value}`]);
  }

}
