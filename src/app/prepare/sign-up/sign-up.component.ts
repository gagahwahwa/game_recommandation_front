import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from '../../shared/service/user.service';
import { PasswordRepeatValidator } from './shared/password-repeat-validator';

@Component({
    selector: 'app-sign-up',
    templateUrl: './sign-up.component.html',
    styleUrls: [
        '../prepare.component.scss',
        './sign-up.component.scss'
    ]
})
export class SignUpComponent implements OnInit {
    @ViewChild('emailForm') emailForm: ElementRef;

    signUpFormGroup: FormGroup;

    // 회원가입 에러 체크용 변수
    isExistEmail: boolean;

    constructor (private userService: UserService,
                 private router: Router) {
        this.signUpFormGroup = new FormGroup({
            email: new FormControl('', Validators.compose([ Validators.required, Validators.email ])),
            passwordMatch: new FormGroup({
                password: new FormControl('', Validators.required),
                passwordRepeat: new FormControl('', Validators.required)
            }, PasswordRepeatValidator.isEqual),
            nickname: new FormControl('', Validators.required)
        });
    }

    ngOnInit () {
        this.isExistEmail = false;
    }

    public signUp () {
        let value = this.signUpFormGroup.value;
        this.userService.signUp({
            email: value.email,
            password: value.passwordMatch.password,
            nickname: value.nickname
        }).subscribe(res => {
            if ( res.result === 'success' ) {
                this.router.navigate([ '/log-in' ]);
            } else if ( res.result === 'fail' ) {
                if ( res.msg === 'email is already exist' ) {
                    this.isExistEmail = true;
                    this.emailForm.nativeElement.focus();
                }
            }
        });
    }
}
