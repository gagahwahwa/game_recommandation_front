import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { StarRateBarModule } from '../star-rate-bar/star-rate-bar.module';
import { ReviewInputBarComponent } from './review-input-bar.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
    imports: [
        CommonModule,
        ReactiveFormsModule,
        StarRateBarModule
    ],
    declarations: [ ReviewInputBarComponent ],
    exports: [ ReviewInputBarComponent ]
})
export class ReviewInputBarModule {
}
