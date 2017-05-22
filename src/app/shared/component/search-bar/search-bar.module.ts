import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SearchBarComponent } from './search-bar.component';
import { GameService } from '../../service/game.service';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
    imports: [
        CommonModule,
        ReactiveFormsModule
    ],
    declarations: [ SearchBarComponent ],
    exports: [ SearchBarComponent ],
    providers: [ GameService ]
})
export class SearchBarModule {
}
