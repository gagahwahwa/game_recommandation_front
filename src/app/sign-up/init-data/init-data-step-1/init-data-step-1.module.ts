import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InitDataStep1Component } from './init-data-step-1.component';
import { FlexLayoutModule } from '@angular/flex-layout';

@NgModule({
  imports: [
    CommonModule,
    FlexLayoutModule
  ],
  declarations: [InitDataStep1Component],
  exports: [InitDataStep1Component]
})
export class InitDataStep1Module { }
