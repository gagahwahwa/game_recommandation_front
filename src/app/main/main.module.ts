import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MainComponent } from './main.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { GameCardContainerModule } from '../shared/component/game-card-container/game-card-container.module';
import { GameService } from '../shared/service/game.service';
import { NavbarModule } from '../shared/component/navbar/navbar.module';
import { SliderModule } from '../shared/component/slider/slider.module';

@NgModule({
  imports: [
    CommonModule,
    FlexLayoutModule,
    GameCardContainerModule,
    FlexLayoutModule,
    NavbarModule,
    SliderModule
  ],
  declarations: [MainComponent],
  providers: [GameService]
})
export class MainModule { }
