import { Injectable } from '@angular/core';
import { GlobalService } from '../store/global.service';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

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
    return this.http.get(this.url + '/rank?limit=10').map((res: any) => res.result === 'success' ? res.data : []);
    // return this.http.get(this.url + '/rank?limit=10').map((res: any) => res.json);
  }
}
