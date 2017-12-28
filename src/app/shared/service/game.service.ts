import { Injectable } from '@angular/core';
import { GlobalService } from '../store/global.service';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class GameService {
  private url: string;
  constructor(private global: GlobalService, private http: HttpClient) {
    this.url = global.url;
  }

  getGameListByTagId(tagId: string): Observable<Array<any>> {
    return this.http.get(this.url + `/gamelist-tag/${tagId}`).map((res: any) => res.result === 'success' ? res.data : []);
  }
}
