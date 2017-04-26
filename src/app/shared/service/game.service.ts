import { Injectable } from '@angular/core';
import { Http } from "@angular/http";
import { Observable } from "rxjs/Observable";
import "rxjs/add/operator/map";

@Injectable()
export class GameService {
    private url: string;

    constructor (private http: Http) {
        this.url = 'http://teamsf.co.kr:9999'
    }

    public getGameListAll (): Observable<any> {
        return this.http.get(this.url + '/gamelist')
                .map(res => res.json().data);
    }

    public getGameById (id: number): Observable<any> {
        return this.http.get(this.url + `/game?id=${id}`)
                .map(res => res.json().data[0]);
    }
}
