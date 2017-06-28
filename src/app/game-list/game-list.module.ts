import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { GameListRoutingModule } from './game-list-routing.module';
import { GameListComponent } from './game-list.component';
import { NavbarModule } from '../shared/component/navbar/navbar.module';
import { GameCardModule } from '../shared/component/game-card/game-card.module';

@NgModule({
    imports: [
        CommonModule,
        GameListRoutingModule,

        NavbarModule,
        GameCardModule
    ],
    declarations: [ GameListComponent ]
})
export class GameListModule {
}
