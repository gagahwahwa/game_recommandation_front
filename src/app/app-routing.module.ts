import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainComponent } from './main/main.component';
import { AuthGuard } from './shared/guard/canActive/auth.guard';

const routes: Routes = [
  {path: '', pathMatch: 'full', redirectTo: 'login'},
  {path: 'main', component: MainComponent, canActivate: [AuthGuard]},
  {path: 'login', loadChildren: 'app/login/login.module#LoginModule'},
  {path: 'sign-up', loadChildren: 'app/sign-up/sign-up.module#SignUpModule'},
  {path: 'game-detail/:gameId', loadChildren: 'app/game-detail/game-detail.module#GameDetailModule', canActivate: [AuthGuard]},
  {path: 'my-page/:userId', loadChildren: 'app/my-page/my-page.module#MyPageModule', canActivate: [AuthGuard]},
  {path: 'game-detail/:gameId', loadChildren: 'app/game-detail/game-detail.module#GameDetailModule', canActivate: [AuthGuard]},
  {path: 'search/:keyword', loadChildren: 'app/search-result/search-result.module#SearchResultModule'}
  {path: 'more-rating', loadChildren: 'app/more-rating/more-rating.module#MoreRatingModule'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [AuthGuard]
})
export class AppRoutingModule {
}
