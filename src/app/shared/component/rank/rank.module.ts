import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RankComponent } from './rank.component';
import { RouterModule } from "@angular/router";

@NgModule({
    imports: [
        CommonModule,
        RouterModule,
    ],
    declarations: [ RankComponent ],
    exports: [ RankComponent ]
})
export class RankModule {
}
