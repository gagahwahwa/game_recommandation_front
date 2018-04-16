import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  nickname: string;
  id: number;

  constructor() { }

  ngOnInit() {
    this.nickname = sessionStorage.getItem('nickname') || '';
    this.id = +sessionStorage.getItem('id') || -1;
  }
}
