import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InitDataStep1Component } from './init-data-step-1.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { TagService } from '../../../shared/service/tag.service';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [
    CommonModule,
    FlexLayoutModule,
    ReactiveFormsModule,
    RouterModule
  ],
  declarations: [InitDataStep1Component],
  exports: [InitDataStep1Component],
  providers: [TagService]
})
export class InitDataStep1Module { }
