import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MainComponent } from "./main/main.component";

const routes: Routes = [
    { path: '', loadChildren: './prepare/prepare.module#PrepareModule' },
    { path: 'main', component: MainComponent },
    { path: 'game', loadChildren: './game/game.module#GameModule' }
];

@NgModule({
    imports: [ RouterModule.forRoot(routes) ],
    exports: [ RouterModule ]
})
export class AppRoutingModule {
}
