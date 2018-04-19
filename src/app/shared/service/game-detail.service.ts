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

  getGame3monthRate(game_id: number): Observable<any> {
    // const game_id_prams = new HttpParams());

    return this.http.get(this.url + `/game-rate-avg?game_id=${game_id}`);
    // .map((res: any) => res.result === 'success' ? res.data : []);
  }
}
