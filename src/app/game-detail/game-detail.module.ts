import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GameDetailRoutingModule } from './game-detail-routing.module';
import { GameDetailComponent } from './game-detail.component';

@NgModule({
  imports: [
    CommonModule,
    GameDetailRoutingModule
  ],
  declarations: [GameDetailComponent]
})
export class GameDetailModule { }
