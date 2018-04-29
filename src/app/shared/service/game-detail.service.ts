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
  getGameRateAvg(game_id: number): Observable<Array<any>> {
    return this.http.get(this.url + `/game-rate-avg?game_id=${game_id}`).map((res: any) => res.result === 'success' ? res.data : []);
  }

  // game_id
  getGameUserRate(userId: number): Observable<Array<any>> {
    return this.http.get(this.url + `/game-rate?user_id=${userId}`)
      .map((res: any) => res.result === 'success' ? res.data : []);
  }

  getGameInformation(game_id: number): Observable<Array<any>> {
    return this.http.get(this.url + `/game?id=${game_id}`).map((res: any) => res.result === 'success' ? res.data : []);
  }

  getGameTag(game_id: number): Observable<Array<any>> {
    return this.http.get(this.url + `/game-tag?game_id=${game_id}`).map((res: any) => res.result === 'success' ? res.data : []);
  }

  getGamePredictScore(game_id: number, userId: number): Observable<Array<any>> {
    return this.http.get(this.url + `/predict-score?user_id=${userId}&game_id=${game_id}`)
      .map((res: any) => res.result === 'success' ? res.data : -999);
  }
}
