import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { GameCardContainerModule } from '../shared/component/game-card-container/game-card-container.module';
import { NavbarModule } from '../shared/component/navbar/navbar.module';
import { ProgressBarModule } from '../shared/component/progress-bar/progress-bar.module';
import { GameService } from '../shared/service/game.service';
import { MyPageService } from '../shared/service/my-page.service';

import { MyPageRoutingModule } from './my-page-routing.module';
import { MyPageComponent } from './my-page.component';

@NgModule({
  imports: [
    CommonModule,
    FlexLayoutModule,
    MyPageRoutingModule,
    GameCardContainerModule,
    ProgressBarModule,
    NavbarModule
  ],
  declarations: [MyPageComponent],
  providers: [MyPageService, GameService]
})
export class MyPageModule {
}
