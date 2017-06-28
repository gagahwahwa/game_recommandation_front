import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { GamerateCounterComponent } from './gamerate-counter.component';

@NgModule({
    imports: [
        CommonModule
    ],
    declarations: [ GamerateCounterComponent ],
    exports: [ GamerateCounterComponent ]
})
export class GamerateCounterModule {
}
