import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FilteredGameListComponent } from './filtered-game-list.component';

const routes: Routes = [
    { path: 'tag/:name', component: FilteredGameListComponent },
    { path: 'developer/:name', component: FilteredGameListComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FilteredGameListRoutingModule { }
