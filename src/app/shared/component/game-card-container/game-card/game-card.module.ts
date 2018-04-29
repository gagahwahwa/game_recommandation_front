import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { RateService } from '../../../service/rate.service';
import { StarRateBarModule } from '../../star-rate-bar/star-rate-bar.module';
import { GameCardComponent } from './game-card.component';

@NgModule({
  imports: [
    CommonModule,
    FlexLayoutModule,
    StarRateBarModule
  ],
  declarations: [GameCardComponent],
  exports: [GameCardComponent],
  providers: [RateService]
})
export class GameCardModule {
}
