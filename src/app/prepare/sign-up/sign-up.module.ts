import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { UserService } from '../../shared/service/user.service';
import { SignUpComponent } from './sign-up.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
    imports: [
        CommonModule,
        ReactiveFormsModule
    ],
    declarations: [ SignUpComponent ],
    exports: [ SignUpComponent ],
    providers: [ UserService ]
})
export class SignUpModule {
}
