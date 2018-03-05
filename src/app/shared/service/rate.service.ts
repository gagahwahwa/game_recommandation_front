import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { GlobalService } from '../store/global.service';

@Injectable()
export class RateService {
  url: string;

  constructor(private http: HttpClient, private global: GlobalService) {
    this.url = global.url;
  }

  postRate(body: any): Observable<any> {
    console.log(body);
    return this.http.post(this.url + '/enroll-game-rate', body);
  }
}
