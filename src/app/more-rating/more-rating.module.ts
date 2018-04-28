import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { GameCardContainerModule } from '../shared/component/game-card-container/game-card-container.module';
import { NavbarModule } from '../shared/component/navbar/navbar.module';
import { ProgressBarModule } from '../shared/component/progress-bar/progress-bar.module';
import { GameService } from '../shared/service/game.service';
import { UserService } from '../shared/service/user.service';

import { MoreRatingRoutingModule } from './more-rating-routing.module';
import { MoreRatingComponent } from './more-rating.component';

@NgModule({
  imports: [
    CommonModule,
    FlexLayoutModule,
    NavbarModule,
    ProgressBarModule,
    GameCardContainerModule,
    MoreRatingRoutingModule
  ],
  providers: [GameService, UserService],
  declarations: [MoreRatingComponent]
})
export class MoreRatingModule {
}
