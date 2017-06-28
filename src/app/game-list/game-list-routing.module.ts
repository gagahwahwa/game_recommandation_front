import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GameListComponent } from './game-list.component';

const routes: Routes = [
    { path: 'tag/:name', component: GameListComponent },
    { path: 'developer/:name', component: GameListComponent }
];

@NgModule({
    imports: [ RouterModule.forChild(routes) ],
    exports: [ RouterModule ]
})
export class GameListRoutingModule {
}
