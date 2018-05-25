import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.scss']
})
export class SearchBarComponent implements OnInit {
  keywordForm: FormGroup;

  constructor(private fb: FormBuilder, private router: Router) {
  }

  ngOnInit() {
    this.keywordForm = this.fb.group({
      keyword: ['']
    });
  }

  search(form: FormGroup) {
    const value = form.controls.keyword.value;
    if (value !== '') {
      if (value.search('#') !== -1) {
        const realValue = value.split('#');
        this.router.navigate([`/search/tag/${realValue[1]}`]);
      } else {
        this.router.navigate([`/search/game/${value}`]);
      }
    }
    // if value involve #, then split
  }

}
