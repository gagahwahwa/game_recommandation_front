import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { LogInModule } from './log-in/log-in.module';
import { PrepareComponent } from './prepare.component';
import { SignUpModule } from './sign-up/sign-up.module';
import { PrepareRoutingModule } from './prepare-routing.module';
import { InitDataModule } from './init-data/init-data.module';

@NgModule({
    imports: [
        CommonModule,
        PrepareRoutingModule,

        LogInModule,
        SignUpModule,
        InitDataModule
    ],
    declarations: [ PrepareComponent ],
    exports: [ PrepareComponent ]
})
export class PrepareModule {
}
