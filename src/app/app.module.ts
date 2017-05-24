import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { GameModule } from './game/game.module';
import { MainModule } from './main/main.module';
import { NavbarModule } from './shared/component/navbar/navbar.module';
import { PrepareModule } from './prepare/prepare.module';

@NgModule({
    declarations: [
        AppComponent
    ],
    imports: [
        BrowserModule,
        FormsModule,
        HttpModule,

        AppRoutingModule,

        NavbarModule,

        MainModule,
        GameModule,
        PrepareModule
    ],
    providers: [],
    bootstrap: [ AppComponent ]
})
export class AppModule {
}
