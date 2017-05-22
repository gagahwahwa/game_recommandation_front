import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class GameService {
    private url: string;

    constructor (private http: Http) {
        this.url = 'http://teamsf.co.kr:9999'
    }

    // 게임리스트 요청, limit만큼 전달 받음. limit이 0이면 전체
    public getGameListWithLimit (limit: number): Observable<any> {
        return this.http.get(this.url + `/gamelist?limit=${limit}`)
            .map(res => res.json().data);
    }

    // 파라매터로 게임을 찾아냄
    public getGameByParameter (type: string, param: number | string): Observable<any> {
        if ( type === 'id' ) {
            return this.http.get(this.url + `/game?id=${param}`)
                .map(res => res.json().data[ 0 ]);
        } else if ( type === 'url' ) {
            return this.http.get(this.url + `/game?url=${param}`)
                .map(res => res.json().data[ 0 ]);
        } else if ( type === 'title' ) {
            return this.http.get(this.url + `/game?title=${param}`)
                .map(res => res.json().data);
        }
    }

    // 랭킹 가져오기 3개월 이내 5개 이상 평점이 기록된 게임을 오름차순으로 정렬한 뷰
    // limit이 0이면 전체를 가져옴
    public getRankWithLimit (limit: number): Observable<any> {
        return this.http.get(this.url + `/rank?limit=${limit}`)
            .map(res => res.json().data);
    }

    // 게임의 id로 해당 게임에 대한 태그 정보를 가져옴
    public getTagByGameId (id: number): Observable<any> {
        return this.http.get(this.url + `/game-tag?game_id=${id}`)
            .map(res => res.json().data);
    }

    // 게임의 id로 해당 게임의 3개월 간 게임 평점 평균, 전체 기간 게임 평점 평균을 가져옴
    public getGameRateAVGById (id: number): Observable<any> {
        return this.http.get(this.url + `/game-rate-avg?game_id=${id}`)
            .map(res => res.json().data[ 0 ]);
    }

    // 게임에 대한 예상 평점을 가져옴
    public getCollaborateFilter (game_id: number, user_id: number) {
        return this.http.get(this.url + `/predict-score?game_id=${game_id}&user_id=${user_id}`)
            .map(res => res.json().data);
    }
}
