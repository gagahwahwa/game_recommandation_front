import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { GameListComponent } from './game-list.component';
import { GameCardModule } from './game-card/game-card.module';

@NgModule({
    imports: [
        CommonModule,
        GameCardModule
    ],
    declarations: [ GameListComponent ],
    exports: [ GameListComponent ]
})
export class GameListModule {
}
