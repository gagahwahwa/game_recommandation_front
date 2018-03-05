import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { RouterModule } from '@angular/router';

import { InitDataRoutingModule } from './init-data-routing.module';
import { InitDataStep1Module } from './init-data-step-1/init-data-step-1.module';
import { InitDataStep2Module } from './init-data-step-2/init-data-step-2.module';
import { InitDataComponent } from './init-data.component';
import { InitDataStoreService } from './shared/store/init-data-store.service';

@NgModule({
  imports: [
    CommonModule,
    FlexLayoutModule,
    InitDataRoutingModule,
    RouterModule,

    InitDataStep1Module,
    InitDataStep2Module
  ],
  declarations: [InitDataComponent],
  providers: [InitDataStoreService]
})
export class InitDataModule {
}
