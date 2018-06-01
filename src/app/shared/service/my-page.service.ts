import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { GlobalService } from '../store/global.service';

@Injectable()
export class MyPageService {
  private url: string;

  constructor(private global: GlobalService, private http: HttpClient) {
    this.url = global.url;
  }
  getTag(user_id: number): Observable<Array<any>> {
    return this.http.get(this.url + `/game-tag?user_id=${user_id}`).map((res: any) => res.result === 'success' ? res.data : []);
  }
  getUserRateCount(user_id: number): Observable<any> {
      return this.http.get(this.url + `/user-rate-count?user_id=${user_id}`).map((res: any) => res.result === 'success' ? res.data : []);
  }
  getUserRateAverage(user_id: number): Observable<any> {
    return this.http.get(this.url + `/user-rate-avg?user_id=${user_id}`).map((res: any) => res.result === 'success' ? res.data : []);
  }
}
