import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { FilteredGameListModule } from './filtered-game-list/filtered-game-list.module';
import { GameModule } from './game/game.module';
import { MainModule } from './main/main.module';
import { PrepareModule } from './prepare/prepare.module';
import { GlobalService } from './shared/store/global.service';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,

    AppRoutingModule,

    MainModule,
    GameModule,
    PrepareModule,
    FilteredGameListModule
  ],
  providers: [GlobalService],
  bootstrap: [AppComponent]
})
export class AppModule {
}
