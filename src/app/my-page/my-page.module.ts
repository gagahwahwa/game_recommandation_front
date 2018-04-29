import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MyPageService } from '../shared/service/my-page.service';
import { GameService } from '../shared/service/game.service';

import { MyPageRoutingModule } from './my-page-routing.module';
import { MyPageComponent } from './my-page.component';
import { NavbarModule } from '../shared/component/navbar/navbar.module';
import { GameCardContainerModule } from '../shared/component/game-card-container/game-card-container.module';

@NgModule({
  imports: [
    CommonModule,
    FlexLayoutModule,
    MyPageRoutingModule,
    GameCardContainerModule,
    NavbarModule
  ],
  declarations: [MyPageComponent],
  providers: [MyPageService, GameService]
})
export class MyPageModule {
}
