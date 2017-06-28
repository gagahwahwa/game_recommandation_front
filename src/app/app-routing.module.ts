import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainComponent } from './main/main.component';
import { AuthGuard } from './shared/guard/auth.guard';

const routes: Routes = [
    { path: '', pathMatch: 'full', redirectTo: 'main' },
    { path: 'prepare', loadChildren: './prepare/prepare.module#PrepareModule' },
    { path: 'main', component: MainComponent, canActivate: [ AuthGuard ] },
    { path: 'game', loadChildren: './game/game.module#GameModule', canActivate: [ AuthGuard ] },
    { path: 'my-page', loadChildren: './my-page/my-page.module#MyPageModule', canActivate: [ AuthGuard ] }
];

@NgModule({
    imports: [ RouterModule.forRoot(routes) ],
    exports: [ RouterModule ],
    providers: [ AuthGuard ]
})
export class AppRoutingModule {
}
