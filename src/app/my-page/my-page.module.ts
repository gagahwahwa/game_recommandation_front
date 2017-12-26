import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';

import { MyPageRoutingModule } from './my-page-routing.module';
import { MyPageComponent } from './my-page.component';

@NgModule({
  imports: [
    CommonModule,
    FlexLayoutModule,
    MyPageRoutingModule
  ],
  declarations: [MyPageComponent]
})
export class MyPageModule {
}
