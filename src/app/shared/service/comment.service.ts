import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { map } from 'rxjs/operators';
import { GlobalService } from '../store/global.service';

@Injectable()
export class CommentService {
  private url: string;

  constructor(private global: GlobalService, private http: HttpClient) {
    this.url = global.url;
  }

  getComments(id: number): Observable<any> {
    return this.http.get(this.url + `/game-rate?game_id=${id}`).pipe(
      map((res: any) => res.result === 'success' ? res.data : [])
    );
  }

  postComment(data: {
    game_id: number,
    user_id: number,
    rate: number,
    comment: string
  }) {
    return this.http.post(this.url + '/enroll-game-rate', data);
  }

  // url 수정
  deleteComment(data: {
    game_id: number,
    user_id: number,
    rate: number,
    comment: string
  }) {
    return this.http.post(this.url + '/enroll-game-rate', data);
  }
}
