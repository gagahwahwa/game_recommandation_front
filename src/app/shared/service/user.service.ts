import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { GlobalService } from '../store/global.service';

@Injectable()
export class UserService {
  url: string;

  constructor(private global: GlobalService, private http: HttpClient) {
    this.url = global.url;
  }

  signUp(id: string, password: string, nickname: string) {
    const encoded = btoa(`${id}:${password}:${nickname}`);
    return this.http.post(this.url + '/sign-up', null, {headers: {Authorization: `Beare ${encoded}`}});
  }

  logIn() {

  }
}
