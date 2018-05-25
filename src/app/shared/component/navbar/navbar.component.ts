import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, UrlSegment } from '@angular/router';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  nickname: string;
  id: number;
  current: Observable<UrlSegment[]>;

  constructor(private route: ActivatedRoute) {
  }

  ngOnInit() {
    this.nickname = sessionStorage.getItem('nickname') || '';
    this.id = +sessionStorage.getItem('id') || -1;
    this.current = this.route.url;
  }
}
