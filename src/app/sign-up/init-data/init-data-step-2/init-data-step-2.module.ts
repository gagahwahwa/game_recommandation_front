import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { RouterModule } from '@angular/router';
import { GameCardContainerModule } from '../../../shared/component/game-card-container/game-card-container.module';
import { ProgressBarModule } from '../../../shared/component/progress-bar/progress-bar.module';
import { GameService } from '../../../shared/service/game.service';
import { UserService } from '../../../shared/service/user.service';
import { InitDataStep2Component } from './init-data-step-2.component';

@NgModule({
  imports: [
    CommonModule,
    FlexLayoutModule,
    RouterModule,
    ProgressBarModule,
    GameCardContainerModule
  ],
  declarations: [InitDataStep2Component],
  exports: [InitDataStep2Component],
  providers: [GameService, UserService]
})
export class InitDataStep2Module {
}
