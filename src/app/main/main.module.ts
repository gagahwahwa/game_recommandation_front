import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MainComponent } from './main.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { Ng2CarouselamosModule } from 'ng2-carouselamos';
import { GameCardContainerModule } from '../shared/component/game-card-container/game-card-container.module';
import { GameService } from '../shared/service/game.service';

@NgModule({
  imports: [
    CommonModule,
    FlexLayoutModule,
    Ng2CarouselamosModule,
    GameCardContainerModule
  ],
  declarations: [MainComponent],
  providers: [GameService]
})
export class MainModule { }
