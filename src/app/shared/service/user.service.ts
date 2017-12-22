import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { GlobalService } from '../store/global.service';

@Injectable()
export class UserService {
  private url: string;

  constructor(private http: HttpClient, private global: GlobalService) {
    this.url = this.global.url;
  }

  // 회원가입
  public signUp(user: any): Observable<any> {
    return this.http.post(this.url + `/sign-up`, user)
  }

  // 로그인
  public logIn(data: any): Observable<any> {
    return this.http.get(this.url + `/log-in?email=${data.email}&password=${data.password}`);
  }

  // 회원 ID로 회원 정보 가져옴
  public getUserById(user_id: number): Observable<any> {
    return this.http.get(this.url + `/user?user_id=${user_id}`)
      .map((res: any) => res.data[0]);
  }

  // 유저에 대한 게임 평점 리스트 가져옴
  public getGameRateById(user_id: number): Observable<any> {
    return this.http.get(this.url + `/game-rate?user_id=${user_id}`)
      .map((res: any) => res.data.reverse());
  }
}
