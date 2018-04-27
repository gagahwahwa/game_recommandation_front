import { Injectable } from '@angular/core';
import { GlobalService } from '../store/global.service';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class MyPageService {
  private url: string;

  constructor(private global: GlobalService, private http: HttpClient) {
    this.url = global.url;
  }
  getTag(user_id: number): Observable<Array<any>> {
    return this.http.get(this.url + `/game-tag?user_id=:user_id=${user_id}`).map((res: any) => res.result === 'success' ? res.data : []);
  }
  getUserRate(user_id: number): Observable<Array<any>> {
      return this.http.get(this.url + `/game-rate?user_id=:user_id=${user_id}`).map((res: any) => res.result === 'success' ? res.data : []);
  }
}