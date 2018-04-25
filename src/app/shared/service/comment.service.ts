import { Injectable } from '@angular/core';
import { GlobalService } from '../store/global.service';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class CommentService {
  private url: string;
  constructor(private global: GlobalService, private http: HttpClient) {
    this.url = global.url;
  }
  // url + 수정 요망
  getComments(id: number): Observable<any> {
    return this.http.get(this.url + `/comment/${id}`);
  }

  // url + 수정 요망
  postComment(data: any) {
    return this.http.post(this.url + '/comment-posting', data);
  }
}
