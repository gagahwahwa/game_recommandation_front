import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StarRateBarComponent } from './star-rate-bar.component';
import { FlexLayoutModule } from '@angular/flex-layout';

@NgModule({
  imports: [
    CommonModule,
    FlexLayoutModule,
  ],
  declarations: [StarRateBarComponent],
  exports: [StarRateBarComponent],
})
export class StarRateBarModule { }
