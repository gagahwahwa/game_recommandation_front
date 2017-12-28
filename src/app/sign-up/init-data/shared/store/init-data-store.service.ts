import { Injectable } from '@angular/core';

@Injectable()
export class InitDataStoreService {
  private _selectedTagList: Array<any>;

  constructor() {
    this._selectedTagList = [];
  }

  get selectedTagList(): Array<any> {
    return this._selectedTagList;
  }

  set selectedTagList(value: Array<any>) {
    this._selectedTagList = value;
  }


}
