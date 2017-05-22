import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TagBarComponent } from './tag-bar.component';

@NgModule({
    imports: [
        CommonModule
    ],
    declarations: [ TagBarComponent ],
    exports: [ TagBarComponent ]
})
export class TagBarModule {
}
