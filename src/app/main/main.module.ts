import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MainComponent } from './main.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { NavbarModule } from '../shared/component/navbar/navbar.module';

@NgModule({
  imports: [
    CommonModule,
    FlexLayoutModule,
    NavbarModule
  ],
  declarations: [MainComponent]
})
export class MainModule { }
