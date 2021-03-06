import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';
import { Observable } from 'rxjs/Observable';
import { map } from 'rxjs/operators';
import { GlobalService } from '../store/global.service';

@Injectable()
export class GameService {
  private url: string;
  private algoUrl: string;

  constructor(private global: GlobalService, private http: HttpClient) {
    this.url = global.url;
    this.algoUrl = global.algoUrl;
  }

  getGameListByTagList(tagList: Array<any>): Observable<Array<any>> {
    const tagIdList = tagList.map(tag => tag.id);
    return this.http.get(this.url + `/gamelist-tag/${JSON.stringify(tagIdList)}`)
      .map((res: any) => res.result === 'success' ? res.data : []);
  }

  getRankingGameList(limit: number): Observable<Array<any>> {
    return this.http.get(this.url + `/rank?limit=${limit}`).map((res: any) => res.result === 'success' ? res.data : []);
  }

  searchGame(type: string, keyword: string): Observable<Array<any>> {
    return this.http.get(this.url + `/search/${type}?keyword=${keyword}`)
      .map((res: any) => res.result === 'success' ? res.data : []);
  }

  getGameList(limit: number = 0): Observable<Array<any>> {
    return this.http.get(this.url + `/gamelist?limit=${limit}`).map((res: any) => res.result === 'success' ? res.data : []);
  }

  getMoreRatingList(userId: number): Observable<Array<any>> {
    return this.http.get(this.url + `/more-rate?user_id=${userId}`).pipe(
      map((res: any) => res.result === 'success' ? res.data : [])
    );
  }

  getGameListByUserId(userId: number): Observable<Array<any>> {
    return this.http.get(this.url + `/game-rate?user_id=${userId}`).pipe(
      map((res: any) => res.result === 'success' ? res.data : [])
    );
  }

  getRecommand(user_id: number): Observable<any> {
    return this.http.get(this.algoUrl + `/recommand?user_id=${user_id}`).map((res: any) => res.recommend);
  }
}
