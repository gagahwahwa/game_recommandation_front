import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { InitDataStoreService } from '../../../../sign-up/init-data/shared/store/init-data-store.service';
import { RateService } from '../../../service/rate.service';
import { StarRateBarModule } from '../../star-rate-bar/star-rate-bar.module';
import { GameCardComponent } from './game-card.component';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [
    CommonModule,
    FlexLayoutModule,
    RouterModule,
    StarRateBarModule
  ],
  declarations: [GameCardComponent],
  exports: [GameCardComponent],
  providers: [RateService, InitDataStoreService]
})
export class GameCardModule {
}
