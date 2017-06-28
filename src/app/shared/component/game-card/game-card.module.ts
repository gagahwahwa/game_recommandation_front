import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { GameCardComponent } from './game-card.component';
import { StarRateBarModule } from '../star-rate-bar/star-rate-bar.module';

@NgModule({
    imports: [
        CommonModule,

        StarRateBarModule
    ],
    declarations: [ GameCardComponent ],
    exports: [ GameCardComponent ]
})
export class GameCardModule {
}
