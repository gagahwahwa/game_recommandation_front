import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';
import { Observable } from 'rxjs/Observable';
import { GlobalService } from '../store/global.service';

@Injectable()
export class GameDetailService {
  private url: string;

  constructor(private global: GlobalService, private http: HttpClient) {
    this.url = global.url;
  }

  // user id
  getGameRate(game_id: number): Observable<Array<any>> {
    // const game_id_prams = new HttpParams());
    return this.http.get(this.url + `/game-rate-avg?game_id=${game_id}`).map((res: any) => res.result === 'success' ? res.data : []);
  }

  // game_id
  getGameUserRate(): Observable<Array<any>> {
    return this.http.get(this.url + `/game-rate?user_id=${sessionStorage.getItem('id')}`)
      .map((res: any) => res.result === 'success' ? res.data : []);
  }

  getGameInformation(game_id: number): Observable<Array<any>> {
    return this.http.get(this.url + `/game?id=${game_id}`).map((res: any) => res.result === 'success' ? res.data : []);
  }

  getGameTag(game_id: number): Observable<Array<any>> {
    return this.http.get(this.url + `/game-tag?game_id=${game_id}`).map((res: any) => res.result === 'success' ? res.data : []);
  }

  getGamePredictScore(game_id: number): Observable<Array<any>> {
    return this.http.get(this.url + `/predict-score?user_id=${sessionStorage.getItem('id')}&game_id=${game_id}`)
      .map((res: any) => res.result === 'success' ? res.data : []);
  }

}


/*getAvgRate(game_id: number): Observable<any>  {
   return this.http.get(this.url + `/game-rate?game_id=${game_id}`).map((res: any) => res.result === 'success' ? res.data : []).reduce((prev, cur) => ({
     sum: prev.sum + cur,
     count: prev.count + 1
  }), { sum: 0, count: 0 })
  .map(o => o.sum / o.count);
 }
*/

/*gethttp(): string {
  return this.url;
}*/

/*
getGame3monthRate(game_id: number): Observable<any> {
  // const game_id_prams = new HttpParams());
  return this.http.get(this.url + `/game-rate-avg?game_id=${game_id}`).map((res: any) => res.result === 'success' ? res.data : []);
}
*/
