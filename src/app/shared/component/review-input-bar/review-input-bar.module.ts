import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReviewInputBarComponent } from './review-input-bar.component';
import { StarRateBarModule } from '../star-rate-bar/star-rate-bar.module';

@NgModule({
    imports: [
        CommonModule,
        StarRateBarModule
    ],
    declarations: [ ReviewInputBarComponent ],
    exports: [ ReviewInputBarComponent ]
})
export class ReviewInputBarModule {
}
