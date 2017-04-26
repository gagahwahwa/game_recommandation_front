import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MainComponent } from "./main/main.component";
import { GameComponent } from "./game/game.component";

const routes: Routes = [
    { path: '', pathMatch: 'full', redirectTo: '/main' },
    { path: 'main', component: MainComponent },
    { path: 'game/:id', loadChildren: './game/game.module#GameModule' },
];

@NgModule({
    imports: [ RouterModule.forRoot(routes) ],
    exports: [ RouterModule ]
})
export class AppRoutingModule {
}
