import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { RouterModule } from '@angular/router';
import { InitDataStoreService } from '../../../sign-up/init-data/shared/store/init-data-store.service';
import { ProgressBarComponent } from './progress-bar.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    FlexLayoutModule
  ],
  declarations: [ProgressBarComponent],
  exports: [ProgressBarComponent],
  providers: [InitDataStoreService]
})
export class ProgressBarModule {
}
