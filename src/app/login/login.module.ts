import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { ReactiveFormsModule } from '@angular/forms';

import { LoginRoutingModule } from './login-routing.module';
import { LoginComponent } from './login.component';
import { UserService } from '../shared/service/user.service';

import { Ng2CarouselamosModule } from 'ng2-carouselamos';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FlexLayoutModule,
    LoginRoutingModule,
    Ng2CarouselamosModule
  ],
  declarations: [LoginComponent],
  providers: [UserService]
})
export class LoginModule {
}
