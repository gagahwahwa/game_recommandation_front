import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { NavbarModule } from '../shared/component/navbar/navbar.module';
import { CommentModule } from './comment/comment.module';

import { GameDetailRoutingModule } from './game-detail-routing.module';
import { GameDetailComponent } from './game-detail.component';

@NgModule({
  imports: [
    CommonModule,
    FlexLayoutModule,
    GameDetailRoutingModule,
    NavbarModule,
    CommentModule
  ],
  declarations: [GameDetailComponent]
})
export class GameDetailModule {
}
