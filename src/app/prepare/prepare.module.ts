import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { LogInModule } from './log-in/log-in.module';
import { PrepareComponent } from './prepare.component';
import { SignUpModule } from './sign-up/sign-up.module';
import { RouterModule } from '@angular/router';

@NgModule({
    imports: [
        CommonModule,
        RouterModule,

        LogInModule,
        SignUpModule
    ],
    declarations: [ PrepareComponent ],
    exports: [ PrepareComponent ]
})
export class PrepareModule {
}
