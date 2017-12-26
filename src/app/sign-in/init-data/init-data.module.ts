import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { InitDataRoutingModule } from './init-data-routing.module';
import { InitDataComponent } from './init-data.component';

@NgModule({
  imports: [
    CommonModule,
    InitDataRoutingModule
  ],
  declarations: [InitDataComponent]
})
export class InitDataModule { }
