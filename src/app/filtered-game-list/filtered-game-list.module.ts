import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { FilteredGameListRoutingModule } from './filtered-game-list-routing.module';
import { FilteredGameListComponent } from './filtered-game-list.component';
import { NavbarModule } from '../shared/component/navbar/navbar.module';
import { GameListModule } from '../shared/component/game-list/game-list.module';

@NgModule({
    imports: [
        CommonModule,
        FilteredGameListRoutingModule,
        NavbarModule,
        GameListModule
    ],
    declarations: [ FilteredGameListComponent ]
})
export class FilteredGameListModule {
}
