import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GameDetailRoutingModule } from './game-detail-routing.module';
import { GameDetailComponent } from './game-detail.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { NavbarModule } from '../shared/component/navbar/navbar.module';

@NgModule({
  imports: [
    CommonModule,
    FlexLayoutModule,
    GameDetailRoutingModule,
    NavbarModule
  ],
  declarations: [GameDetailComponent]
})
export class GameDetailModule { }
