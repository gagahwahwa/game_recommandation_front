import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReviewInputBarComponent } from './review-input-bar.component';

@NgModule({
    imports: [
        CommonModule
    ],
    declarations: [ ReviewInputBarComponent ],
    exports: [ ReviewInputBarComponent ]
})
export class ReviewInputBarModule {
}
