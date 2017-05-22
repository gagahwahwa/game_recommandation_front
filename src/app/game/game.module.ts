import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GameRoutingModule } from './game-routing.module';
import { GameComponent } from "./game.component";
import { GameService } from "../shared/service/game.service";
import { ReviewInputBarModule } from "../shared/component/review-input-bar/review-input-bar.module";
import { ReviewModule } from "../shared/component/review/review.module";
import { TagBarModule } from './tag-bar/tag-bar.module';

@NgModule({
    imports: [
        CommonModule,
        GameRoutingModule,

        ReviewInputBarModule,
        ReviewModule,
        TagBarModule
    ],
    declarations: [ GameComponent ],
    providers: [ GameService ]
})
export class GameModule {
}
