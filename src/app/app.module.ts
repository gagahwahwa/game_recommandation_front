import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { MainModule } from './main/main.module';
import { NavbarModule } from './shared/component/navbar/navbar.module';
import { GlobalService } from './shared/store/global.service';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    NavbarModule,
    MainModule
  ],
  providers: [GlobalService],
  bootstrap: [AppComponent]
})
export class AppModule {
}
