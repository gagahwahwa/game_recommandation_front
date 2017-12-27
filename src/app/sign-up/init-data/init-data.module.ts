import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { InitDataRoutingModule } from './init-data-routing.module';
import { InitDataComponent } from './init-data.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { GameCardContainerModule } from '../../shared/component/game-card-container/game-card-container.module';

@NgModule({
  imports: [
    CommonModule,
    FlexLayoutModule,
    InitDataRoutingModule,

    GameCardContainerModule
  ],
  declarations: [InitDataComponent]
})
export class InitDataModule { }
