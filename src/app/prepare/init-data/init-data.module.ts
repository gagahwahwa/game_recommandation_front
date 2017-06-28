import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { NavbarModule } from '../../shared/component/navbar/navbar.module';
import { StarRateBarModule } from '../../shared/component/star-rate-bar/star-rate-bar.module';
import { GameService } from '../../shared/service/game.service';
import { InitDataComponent } from './init-data.component';
import { PaginationModule } from 'ngx-bootstrap';
import { RouterModule } from '@angular/router';
import { GamerateCounterModule } from '../../shared/component/gamerate-counter/gamerate-counter.module';
import { GameCardModule } from '../../shared/component/game-list/game-card/game-card.module';
import { GameListModule } from '../../shared/component/game-list/game-list.module';

@NgModule({
    imports: [
        CommonModule,
        NavbarModule,
        RouterModule,

        GameListModule,
        GamerateCounterModule
    ],
    declarations: [ InitDataComponent ],
    exports: [ InitDataComponent ],
    providers: [ GameService ]
})
export class InitDataModule {
}
