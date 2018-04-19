import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GameDetailRoutingModule } from './game-detail-routing.module';
import { GameDetailComponent } from './game-detail.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { GameDetailService } from '../shared/service/game-detail.service';

@NgModule({
  imports: [
    CommonModule,
    FlexLayoutModule,
    GameDetailRoutingModule
  ],
  declarations: [GameDetailComponent],
  providers: [GameDetailService]
})
export class GameDetailModule { }
