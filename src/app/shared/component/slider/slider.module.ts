import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { SliderComponent } from './slider.component';
import { FlexLayoutModule } from '@angular/flex-layout';

@NgModule({
  imports: [
    CommonModule,
    FlexLayoutModule
  ],
  declarations: [SliderComponent],
  exports: [SliderComponent]
})
export class SliderModule {
}
