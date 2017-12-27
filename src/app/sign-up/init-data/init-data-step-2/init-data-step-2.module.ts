import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { InitDataStep2Component } from './init-data-step-2.component';
import { GameCardContainerModule } from '../../../shared/component/game-card-container/game-card-container.module';
import { FlexLayoutModule } from '@angular/flex-layout';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [
    CommonModule,
    FlexLayoutModule,
    RouterModule,
    GameCardContainerModule
  ],
  declarations: [InitDataStep2Component],
  exports: [InitDataStep2Component]
})
export class InitDataStep2Module {
}
