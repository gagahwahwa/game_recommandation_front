import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from '../shared/service/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;

  constructor(private fb: FormBuilder, private userService: UserService, private router: Router) {
  }

  ngOnInit() {
    this.loginForm = this.fb.group({
      email: ['', [Validators.required]],
      password: ['', [Validators.required]]
    });
  }

  login(form: FormGroup) {
    const email = form.value.email;
    const password = form.value.password;
    this.userService.logIn(email, password).subscribe((res: any) => {
      if (res.result === 'success') {
        sessionStorage.setItem('id', res.data.id);
        this.router.navigateByUrl('/main');
      } else {
        alert(res.msg);
      }
    });
  }
}
