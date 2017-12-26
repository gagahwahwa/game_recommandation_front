import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { NavbarModule } from '../shared/component/navbar/navbar.module';
import { ReviewInputBarModule } from '../shared/component/review-input-bar/review-input-bar.module';
import { ReviewModule } from '../shared/component/review/review.module';
import { GameService } from '../shared/service/game.service';

import { GameRoutingModule } from './game-routing.module';
import { GameComponent } from './game.component';
import { TagBarModule } from './tag-bar/tag-bar.module';

@NgModule({
  imports: [
    CommonModule,
    GameRoutingModule,

    NavbarModule,
    ReviewInputBarModule,
    ReviewModule,
    TagBarModule
  ],
  declarations: [GameComponent],
  providers: [GameService]
})
export class GameModule {
}
