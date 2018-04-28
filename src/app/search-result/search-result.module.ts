import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { GameCardContainerModule } from '../shared/component/game-card-container/game-card-container.module';
import { NavbarModule } from '../shared/component/navbar/navbar.module';
import { GameService } from '../shared/service/game.service';

import { SearchResultRoutingModule } from './search-result-routing.module';
import { SearchResultComponent } from './search-result.component';

@NgModule({
  imports: [
    CommonModule,
    FlexLayoutModule,
    SearchResultRoutingModule,
    NavbarModule,
    GameCardContainerModule
  ],
  providers: [GameService],
  declarations: [SearchResultComponent]
})
export class SearchResultModule {
}
