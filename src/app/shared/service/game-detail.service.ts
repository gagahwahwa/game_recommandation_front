import { Injectable } from '@angular/core';
import { GlobalService } from '../store/global.service';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class GameDetailService {
  private url: string;
  constructor(private global: GlobalService, private http: HttpClient) {
    this.url = global.url;
  }
  constructor() { }

  getGame3monthRate(id: Array<any>): Observable<Array<any>> {
    return this.http.get(this.url + `/gamedetail-page/${id}`).map((res: any) => res.result === 'success' ? res.data : []);
  }
}