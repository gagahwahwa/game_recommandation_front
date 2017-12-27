import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from '../shared/service/user.service';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss']
})
export class SignUpComponent implements OnInit {
  signUpFormGroup: FormGroup;

  constructor(private fb: FormBuilder, private router: Router, private userService: UserService) {
  }

  ngOnInit() {
    this.signUpFormGroup = this.fb.group({
      email: ['', Validators.required],
      nickname: ['', Validators.required],
      password: ['', Validators.required],
    });
  }

  signup(form: FormGroup) {
    if ( form.invalid ) {
      console.log(form.controls);
    }
    this.router.navigateByUrl('/sign-up/init-data');
  }
}
