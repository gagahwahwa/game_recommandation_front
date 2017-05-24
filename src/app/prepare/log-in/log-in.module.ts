import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { UserService } from '../../shared/service/user.service';
import { LogInComponent } from './log-in.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
    imports: [
        CommonModule,
        ReactiveFormsModule,
        RouterModule
    ],
    declarations: [ LogInComponent ],
    exports: [ LogInComponent ],
    providers: [ UserService ]
})
export class LogInModule {
}
