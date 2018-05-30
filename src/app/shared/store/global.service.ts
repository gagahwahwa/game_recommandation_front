import { Injectable } from '@angular/core';

@Injectable()
export class GlobalService {
  _url: string;
  private _algoUrl: string;

  constructor() {
    this._url = 'http://13.124.113.49:9988';
    // this._url = 'http://localhost:9988';
    this._algoUrl = 'http://13.124.113.49:9989/algo';
  }

  get algoUrl(): string {
    return this._algoUrl;
  }

  get url() {
    return this._url;
  }
}
