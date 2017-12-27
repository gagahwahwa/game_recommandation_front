import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GameCardComponent } from './game-card.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [GameCardComponent],
  exports: [GameCardComponent]
})
export class GameCardModule { }
