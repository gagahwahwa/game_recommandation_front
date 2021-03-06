import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { NavbarModule } from '../shared/component/navbar/navbar.module';
import { GameDetailService } from '../shared/service/game-detail.service';
import { CommentModule } from './comment/comment.module';

import { GameDetailRoutingModule } from './game-detail-routing.module';
import { GameDetailComponent } from './game-detail.component';
import { GameCardModule } from '../shared/component/game-card-container/game-card/game-card.module';

@NgModule({
  imports: [
    CommonModule,
    FlexLayoutModule,
    GameDetailRoutingModule,
    NavbarModule,
    CommentModule,
    GameCardModule
  ],
  declarations: [GameDetailComponent],
  providers: [GameDetailService]
})
export class GameDetailModule {
}
