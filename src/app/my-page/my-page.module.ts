import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';

import { MyPageRoutingModule } from './my-page-routing.module';
import { MyPageComponent } from './my-page.component';
import { NavbarModule } from '../shared/component/navbar/navbar.module';

@NgModule({
  imports: [
    CommonModule,
    FlexLayoutModule,
    MyPageRoutingModule,
    NavbarModule
  ],
  declarations: [MyPageComponent]
})
export class MyPageModule {
}
