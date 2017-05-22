import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StarRateBarComponent } from './star-rate-bar.component';

@NgModule({
    imports: [
        CommonModule
    ],
    declarations: [ StarRateBarComponent ],
    exports: [ StarRateBarComponent ]
})
export class StarRateBarModule {
}
