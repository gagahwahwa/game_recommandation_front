import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GameCardComponent } from './game-card.component';
import { StarRateBarModule } from '../../star-rate-bar/star-rate-bar.module';
import { FlexLayoutModule } from '@angular/flex-layout';

@NgModule({
  imports: [
    CommonModule,
    FlexLayoutModule,
    StarRateBarModule
  ],
  declarations: [GameCardComponent],
  exports: [GameCardComponent]
})
export class GameCardModule { }
