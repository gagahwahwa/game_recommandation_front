import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';
import { Observable } from 'rxjs/Observable';
import { GlobalService } from '../store/global.service';

@Injectable()
export class GameService {
  private url: string;
  constructor(private global: GlobalService, private http: HttpClient) {
    this.url = global.url;
  }

  getGameListByTagList(tagList: Array<any>): Observable<Array<any>> {
    const tagIdList = tagList.map(tag => tag.id);
    return this.http.get(this.url + `/gamelist-tag/${JSON.stringify(tagIdList)}`)
      .map((res: any) => res.result === 'success' ? res.data : []);
  }

  getRankingGameList(limit: number): Observable<Array<any>> {
    return this.http.get(this.url + `/rank?limit=${limit}`).map((res: any) => res.result === 'success' ? res.data : []);
  }

  searchGame(keyword: string): Observable<Array<any>> {
    return this.http.get(this.url + `/search?keyword=${keyword}`)
      .map((res: any) => res.result === 'success' ? res.data : []);
  }

  getGameList(limit: number = 0): Observable<Array<any>> {
    return this.http.get(this.url + `/gamelist?limit=${limit}`).map((res: any) => res.result === 'success' ? res.data : []);
  }
}
