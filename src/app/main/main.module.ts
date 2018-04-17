import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MainComponent } from './main.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { Ng2CarouselamosModule } from 'ng2-carouselamos';

@NgModule({
  imports: [
    CommonModule,
    FlexLayoutModule,
    Ng2CarouselamosModule
  ],
  declarations: [MainComponent]
})
export class MainModule { }
