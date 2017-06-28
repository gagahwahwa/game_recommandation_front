import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { FilteredGameListRoutingModule } from './filtered-game-list-routing.module';
import { FilteredGameListComponent } from './filtered-game-list.component';
import { NavbarModule } from '../shared/component/navbar/navbar.module';

@NgModule({
    imports: [
        CommonModule,
        FilteredGameListRoutingModule,

        NavbarModule
    ],
    declarations: [ FilteredGameListComponent ]
})
export class FilteredGameListModule {
}
