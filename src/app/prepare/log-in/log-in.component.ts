import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from '../../shared/service/user.service';

@Component({
    selector: 'app-log-in',
    templateUrl: './log-in.component.html',
    styleUrls: [
        '../prepare.component.scss',
        './log-in.component.scss'
    ]
})
export class LogInComponent implements OnInit {
    logInForm: FormGroup;

    // 로그인 검증 관련 변수
    isEmailFault: boolean;
    isPasswordFault: boolean;

    constructor (private userService: UserService, private router: Router) {
        this.logInForm = new FormGroup({
            email: new FormControl('', Validators.required),
            password: new FormControl('', Validators.required)
        });
    }

    ngOnInit () {
        this.isEmailFault = false;
        this.isPasswordFault = false;
    }

    public logIn () {
        let value = this.logInForm.value;
        this.userService.logIn(value).subscribe(res => {
            if ( res.result === 'success' ) {
                sessionStorage.setItem('user_id', res.data.id);
                sessionStorage.setItem('email', res.data.email);
                sessionStorage.setItem('nickname', res.data.nickname);
                this.router.navigate([ '/main' ]);
            } else if ( res.result === 'fail' ) {
                if ( res.msg === 'miss match password' ) {
                    this.isPasswordFault = true;
                } else if ( res.msg === 'cannot found email' ) {
                    this.isEmailFault = true;
                }
            }
        });
    }
}
