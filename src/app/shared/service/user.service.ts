import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { map } from 'rxjs/operators';
import { GlobalService } from '../store/global.service';

@Injectable()
export class UserService {
  private url: string;

  constructor(private global: GlobalService, private http: HttpClient) {
    this.url = global.url;
  }

  signUp(id: string, password: string, nickname: string): Observable<any> {
    const encoded = btoa(`${id}:${password}:${nickname}`);
    return this.http.post(this.url + '/sign-up', null, {headers: {Authorization: `Beare ${encoded}`}});
  }

  logIn(email: string, password: string): Observable<any> {
    const encoded = btoa(`${email}:${password}`);
    return this.http.get(this.url + `/log-in`, {headers: {Authorization: `Base ${encoded}`}});
  }

  getUserRateCount(userId: number): Observable<any> {
    return this.http.get(this.url + `/user-rate-count?user_id=${userId}`).pipe(
      map((res: any) => res.data[0].count)
    );
  }
}
