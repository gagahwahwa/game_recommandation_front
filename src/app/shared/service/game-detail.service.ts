import { Injectable } from '@angular/core';
import { GlobalService } from '../store/global.service';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class GameDetailService {
  private url: string;
  constructor(private global: GlobalService, private http: HttpClient) {
    this.url = global.url;
  }

  getGame3monthRate(game_id: number): Observable<Array<any>> {
    // const game_id_prams = new HttpParams());

    return this.http.get(this.url + `/game-rate-avg?game_id=${game_id}`).map((res: any) => res.result === 'success' ? res.data : []);
  }

  // user id
  getGameRate(game_id: number): Observable<Array<any>> {
    // const game_id_prams = new HttpParams());
    return this.http.get(this.url + `/game-rate?game_id=${game_id}`).map((res: any) => res.result === 'success' ? res.data : []);
  }
  // game_id
  getGameUserRate(): Observable<Array<any>>  {
    return this.http.get(this.url + `/game-rate?user_id=${sessionStorage.getItem('id')}`)
                .map((res: any) => res.result === 'success' ? res.data : []);
  }

  getGameInformation(game_id: number): Observable<any> {
    return this.http.get(this.url + `/game?id=${game_id}`);
    // .map((res: any) => res.result === 'success' ? res.data : [])
  }

}
