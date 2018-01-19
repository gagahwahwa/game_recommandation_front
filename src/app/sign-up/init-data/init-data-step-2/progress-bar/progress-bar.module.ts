import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProgressBarComponent } from './progress-bar.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { InitDataStoreService } from '../../shared/store/init-data-store.service';

@NgModule({
  imports: [
    CommonModule,
    FlexLayoutModule
  ],
  declarations: [ProgressBarComponent],
  exports: [ProgressBarComponent],
  providers: [InitDataStoreService]
})
export class ProgressBarModule { }
