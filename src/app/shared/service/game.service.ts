import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';
import { Observable } from 'rxjs/Observable';
import { GlobalService } from '../store/global.service';

@Injectable()
export class GameService {
  private url: string;

  constructor(private http: HttpClient, private global: GlobalService) {
    this.url = this.global.url;
  }

  // 게임리스트 요청, limit만큼 전달 받음. limit이 0이면 전체
  public getGameListWithLimit(limit: number): Observable<any> {
    return this.http.get(this.url + `/gamelist?limit=${limit}`)
      .map((res: any) => res.data);
  }

  // 파라매터로 게임을 찾아냄
  public getGameByParameter(type: string, param: number | string): Observable<any> {
    if (type === 'id') {
      return this.http.get(this.url + `/game?id=${param}`)
        .map((res: any) => res.data[0]);
    } else if (type === 'url') {
      return this.http.get(this.url + `/game?url=${param}`)
        .map((res: any) => res.data[0]);
    } else if (type === 'title') {
      return this.http.get(this.url + `/game?title=${param}`)
        .map((res: any) => res.data[0]);
    } else if (type === 'tag') {
      return this.http.get(this.url + `/game?tag_name=${param}`)
        .map((res: any) => res.data);
    }
  }

  // 게임 검색
  public searchGameByKeyword(keyword: string): Observable<any> {
    return this.http.get(this.url + `/search?keyword=${keyword}`)
      .map((res: any) => res.data);
  }

  // 랭킹 가져오기 3개월 이내 5개 이상 평점이 기록된 게임을 오름차순으로 정렬한 뷰
  // limit이 0이면 전체를 가져옴
  public getRankWithLimit(limit: number): Observable<any> {
    return this.http.get(this.url + `/rank?limit=${limit}`)
      .map((res: any) => res.data);
  }

  // 게임의 id로 해당 게임에 대한 태그 정보를 가져옴
  public getTagByGameId(id: number): Observable<any> {
    return this.http.get(this.url + `/game-tag?game_id=${id}`)
      .map((res: any) => res.data);
  }

  // 유저의 id에 대해 유저가 선택한 게임의 Distinc 한 tag 정보와 얼만큼 선택 되었는지 count를 가져옴
  public getTagByUserId(user_id: number): Observable<any> {
    return this.http.get(this.url + `/game-tag?user_id=${user_id}`)
      .map((res: any) => res.data);
  }

  // 게임의 id로 해당 게임의 3개월 간 게임 평점 평균, 전체 기간 게임 평점 평균을 가져옴
  public getGameRateAVGById(id: number): Observable<any> {
    return this.http.get(this.url + `/game-rate-avg?game_id=${id}`)
      .map((res: any) => res.data[0]);
  }

  // 게임에 대한 예상 평점을 가져옴
  public getCollaborateFilter(game_id: number, user_id: number): Observable<any> {
    return this.http.get(this.url + `/predict-score?game_id=${game_id}&user_id=${user_id}`)
      .map((res: any) => res.data);
  }

  // 게임에 대한 평점 등록
  public setGameRateById(data: any): Observable<any> {
    return this.http.post(this.url + `/enroll-game-rate`, data)
      .map((res: any) => res);
  }

  // 게임에 대한 평점 리스트를 가져옴
  public getGameRateById(game_id: number): Observable<any> {
    return this.http.get(this.url + `/game-rate?game_id=${game_id}`)
      .map((res: any) => res.data);
  }

  // 태그에 대한 게임 리스트 가져옴
  public getGameByTagId(tag_id: number): Observable<any> {
    return this.http.get(this.url + `/gamelist-tag?tag_id=${tag_id}`)
      .map((res: any) => res.data);
  }

  // 태그 정보 가져옴
  public getTagList(): Observable<any> {
    return this.http.get(this.url + `/taglist`)
      .map((res: any) => res.data);
  }

  // 유저가 평가한 게임에 대해 2개 이상의 게임이 평가된 Distinct한 게임사를 들고옴
  public getGameDeveloperByUserId(user_id: number): Observable<any> {
    return this.http.get(this.url + `/game-developer?user_id=${user_id}`)
      .map((res: any) => res.data);
  }
}
