import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss']
})
export class SignUpComponent implements OnInit {
  signUpFormGroup: FormGroup;

  constructor(private fb: FormBuilder, private router: Router) {
  }

  ngOnInit() {
    this.signUpFormGroup = this.fb.group({
      email: ['', Validators.required],
      password: ['', Validators.required]
    });
  }

  signup() {
    this.router.navigateByUrl('/sign-up/init-data');
  }
}
