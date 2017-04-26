import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { AppRoutingModule } from "./app-routing.module";
import { MainModule } from "./main/main.module";
import { NavbarModule } from "./shared/component/navbar/navbar.module";
import { GameModule } from "./game/game.module";

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
        GameModule
    ],
    providers: [],
    bootstrap: [ AppComponent ]
})
export class AppModule {
}
