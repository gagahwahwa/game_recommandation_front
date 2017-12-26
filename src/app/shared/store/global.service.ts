import { Injectable } from '@angular/core';

@Injectable()
export class GlobalService {
  _url: string;
  constructor() {
    this._url = 'http://localhost:9999';
  }

  get url () {
    return this._url;
  }
}
