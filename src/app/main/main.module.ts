import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainComponent } from './main.component';
import { GameService } from "../shared/service/game.service";
import { RankModule } from "../shared/component/rank/rank.module";
import { SearchBarModule } from '../shared/component/search-bar/search-bar.module';
import { RouterModule } from '@angular/router';

@NgModule({
    imports: [
        CommonModule,
        RouterModule,

        RankModule,

        SearchBarModule
    ],
    declarations: [ MainComponent ],
    providers: [ GameService ]
})
export class MainModule {
}
