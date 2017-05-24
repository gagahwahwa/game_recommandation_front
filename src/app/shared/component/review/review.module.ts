import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReviewComponent } from './review.component';

@NgModule({
    imports: [
        CommonModule
    ],
    declarations: [ ReviewComponent ],
    exports: [ ReviewComponent ]
})
export class ReviewModule {
}
