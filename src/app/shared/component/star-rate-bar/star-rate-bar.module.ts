import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StarRateBarComponent } from './star-rate-bar.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { InitDataStoreService } from '../../../sign-up/init-data/shared/store/init-data-store.service';
import { RateService } from '../../service/rate.service';

@NgModule({
  imports: [
    CommonModule,
    FlexLayoutModule,
  ],
  declarations: [StarRateBarComponent],
  exports: [StarRateBarComponent],
  providers: [InitDataStoreService]
})
export class StarRateBarModule { }
