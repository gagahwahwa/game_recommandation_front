import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { InitDataRoutingModule } from './init-data-routing.module';
import { InitDataComponent } from './init-data.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { GameCardContainerModule } from '../../shared/component/game-card-container/game-card-container.module';
import { InitDataStep1Module } from './init-data-step-1/init-data-step-1.module';
import { InitDataStep2Module } from './init-data-step-2/init-data-step-2.module';

@NgModule({
  imports: [
    CommonModule,
    FlexLayoutModule,
    InitDataRoutingModule,

    InitDataStep1Module,
    InitDataStep2Module
  ],
  declarations: [InitDataComponent]
})
export class InitDataModule { }
