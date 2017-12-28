import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from '../shared/service/user.service';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss']
})
export class SignUpComponent implements OnInit {
  signUpFormGroup: FormGroup;
  isEmailDuplicate: boolean;

  constructor(private fb: FormBuilder, private router: Router, private userService: UserService) {
  }

  ngOnInit() {
    this.signUpFormGroup = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      nickname: ['', Validators.required],
      password: ['', Validators.required],
    });
    this.isEmailDuplicate = false;
  }

  signup(form: FormGroup) {
    if (form.valid) {
      this.userService.signUp(form.controls.email.value, btoa(form.controls.password.value), form.controls.nickname.value)
        .subscribe((res: any) => {
          if (res.result === 'fail' && res.msg === 'email is already exist') {
            this.isEmailDuplicate = true;
            form.controls.email.reset();
          } else if (res.result === 'success') {
            sessionStorage.setItem('id', form.controls.email.value);
            this.router.navigateByUrl('/sign-up/init-data');
          }
        });
    }
  }
}
