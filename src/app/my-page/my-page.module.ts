import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { GameService } from '../shared/service/game.service';
import { UserService } from '../shared/service/user.service';

import { MyPageRoutingModule } from './my-page-routing.module';
import { MyPageComponent } from './my-page.component';
import { NavbarModule } from '../shared/component/navbar/navbar.module';

@NgModule({
    imports: [
        CommonModule,
        NavbarModule,
        MyPageRoutingModule
    ],
    declarations: [ MyPageComponent ],
    providers: [ UserService, GameService ]
})
export class MyPageModule {
}
