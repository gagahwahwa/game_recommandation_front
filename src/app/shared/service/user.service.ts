import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class UserService {
    private url: string;

    constructor (private http: Http) {
        this.url = 'http://localhost:9999';
        //this.url = 'http://52.78.156.169:9999';
        //this.url = 'http://teamsf.co.kr:9999';
    }

    // 회원가입
    public signUp (user: any): Observable<any> {
        return this.http.post(this.url + `/sign-up`, user)
            .map(res => res.json());
    }

    // 로그인
    public logIn (data: any): Observable<any> {
        return this.http.get(this.url + `/log-in?email=${data.email}&password=${data.password}`)
            .map(res => res.json());
    }

    // 회원 ID로 회원 정보 가져옴
    public getUserById (user_id: number): Observable<any> {
        return this.http.get(this.url + `/user?user_id=${user_id}`)
            .map(res => res.json().data[ 0 ]);
    }

    // 유저에 대한 게임 평점 리스트 가져옴
    public getGameRateById (user_id: number): Observable<any> {
        return this.http.get(this.url + `/game-rate?user_id=${user_id}`)
            .map(res => res.json().data.reverse());
    }
}
