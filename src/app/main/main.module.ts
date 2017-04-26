import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainComponent } from './main.component';
import { GameService } from "../shared/service/game.service";
import { RankModule } from "../shared/component/rank/rank.module";

@NgModule({
    imports: [
        CommonModule,
        RankModule
    ],
    declarations: [ MainComponent ],
    providers: [ GameService ]
})
export class MainModule {
}
