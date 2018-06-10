import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { ReactiveFormsModule } from '@angular/forms';
import { GameCardContainerModule } from '../shared/component/game-card-container/game-card-container.module';
import { NavbarModule } from '../shared/component/navbar/navbar.module';
import { SearchBarModule } from '../shared/component/search-bar/search-bar.module';
import { SliderModule } from '../shared/component/slider/slider.module';
import { GameService } from '../shared/service/game.service';
import { MainRoutingModule } from './main-routing.module';

import { MainComponent } from './main.component';

@NgModule({
  imports: [
    CommonModule,
    MainRoutingModule,
    FlexLayoutModule,
    ReactiveFormsModule,
    GameCardContainerModule,
    FlexLayoutModule,
    NavbarModule,
    SliderModule,
    SearchBarModule
  ],
  declarations: [MainComponent],
  providers: [GameService]
})
export class MainModule { }
