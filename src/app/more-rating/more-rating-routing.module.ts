import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MoreRatingComponent } from './more-rating.component';

const routes: Routes = [
  {path: '', component: MoreRatingComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MoreRatingRoutingModule {
}
