import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { GlobalService } from '../store/global.service';
import 'rxjs/add/operator/map';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class TagService {
  url: string;

  constructor(private global: GlobalService, private http: HttpClient) {
    this.url = global.url;
  }

  getTagAll(): Observable<Array<any>> {
    return this.http.get(this.url + `/taglist`).map((res: any) => res.result === 'success' ? res.data : []);
  }
}
