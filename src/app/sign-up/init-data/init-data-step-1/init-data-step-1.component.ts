import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/distinctUntilChanged';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/shareReplay';
import { Observable } from 'rxjs/Observable';

import { TagService } from '../../../shared/service/tag.service';
import { InitDataStoreService } from '../shared/store/init-data-store.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-init-data-step-1',
  templateUrl: './init-data-step-1.component.html',
  styleUrls: ['./init-data-step-1.component.scss']
})
export class InitDataStep1Component implements OnInit {
  tagList$: Observable<Array<any>>;
  searchedTagList$: Observable<Array<any>>;
  searchKeyword: FormControl;
  selectedTagList: Array<any>;
  MAX_COUNT: number;

  constructor(private initDataStore: InitDataStoreService, private tagService: TagService, private router: Router) {
  }

  ngOnInit() {
    this.searchKeyword = new FormControl();
    this.selectedTagList = [];
    this.MAX_COUNT = 5;

    this.tagList$ = this.tagService.getTagAll().shareReplay();
    this.searchedTagList$ = this.tagList$;
    this.searchKeyword.valueChanges.debounceTime(300).distinctUntilChanged().map((keyword: string) =>
      this.tagList$.map((list: Array<any>) =>
        list
          .filter((item: any) => item.name.toLowerCase().search(keyword.toLowerCase()) !== -1)
          .filter((item: any) => this.selectedTagList.findIndex(selected => selected.name === item.name) === -1)
      )
    ).subscribe((observable: Observable<any>) => this.searchedTagList$ = observable);
  }

  select(tag: any) {
    this.selectedTagList.push(tag);
    this.reload();
  }

  unselect(tag: any) {
    this.selectedTagList.splice(this.selectedTagList.findIndex(selected => selected.name === tag.name), 1);
    this.reload();
  }

  reload() {
    this.searchedTagList$ = this.searchedTagList$.map((list: Array<any>) => list.filter((item: any) =>
      this.selectedTagList.findIndex(selected => selected.name === item.name) === -1)
    );
  }

  next() {
    this.initDataStore.selectedTagList = this.selectedTagList;
    this.router.navigateByUrl('/sign-up/init-data/2');
  }
}
