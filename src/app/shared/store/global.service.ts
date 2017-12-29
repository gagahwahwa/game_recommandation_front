import { Injectable } from '@angular/core';

@Injectable()
export class GlobalService {
  _url: string;
  constructor() {
    this._url = 'http://localhost:9988';
    // this._url = 'http://52.79.187.160:9988';
  }

  get url () {
    return this._url;
  }
}
