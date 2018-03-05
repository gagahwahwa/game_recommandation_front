import { Injectable } from '@angular/core';
import { ReplaySubject } from 'rxjs/ReplaySubject';
import { Subject } from 'rxjs/Subject';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';

@Injectable()
export class InitDataStoreService {
  private _selectedTagList: Array<any>;
  private _ratingCount: number;

  constructor() {
    this._selectedTagList = [];
    this._ratingCount = 0;
  }

  get ratingCount(): number {
    return this._ratingCount;
  }

  set ratingCount(value: number) {
    this._ratingCount = value;
  }

  get selectedTagList(): Array<any> {
    return this._selectedTagList;
  }

  set selectedTagList(value: Array<any>) {
    this._selectedTagList = value;
  }
}
