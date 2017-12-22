import { Injectable } from '@angular/core';

@Injectable()
export class GlobalService {
  private _url: string;

  constructor() {
    // this._url = 'http://localhost:9999';
    this._url = 'http://52.79.187.160:9999';
  }

  get url(): string {
    return this._url;
  }
}
