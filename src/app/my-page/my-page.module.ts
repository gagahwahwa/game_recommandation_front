import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { GamerateCounterModule } from '../shared/component/gamerate-counter/gamerate-counter.module';
import { NavbarModule } from '../shared/component/navbar/navbar.module';
import { GameService } from '../shared/service/game.service';
import { UserService } from '../shared/service/user.service';

import { MyPageRoutingModule } from './my-page-routing.module';
import { MyPageComponent } from './my-page.component';

@NgModule({
    imports: [
        CommonModule,
        NavbarModule,

        MyPageRoutingModule,

        GamerateCounterModule
    ],
    declarations: [ MyPageComponent ],
    providers: [ UserService, GameService ]
})
export class MyPageModule {
}
