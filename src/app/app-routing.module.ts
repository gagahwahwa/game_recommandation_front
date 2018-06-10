import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './shared/guard/canActive/auth.guard';

const routes: Routes = [
  {path: '', pathMatch: 'full', redirectTo: 'login'},
  {path: 'main', loadChildren: './main/main.module#MainModule', canActivate: [AuthGuard]},
  {path: 'login', loadChildren: './login/login.module#LoginModule'},
  {path: 'sign-up', loadChildren: './sign-up/sign-up.module#SignUpModule'},
  {path: 'game-detail/:gameId', loadChildren: './game-detail/game-detail.module#GameDetailModule', canActivate: [AuthGuard]},
  {path: 'my-page/:userId', loadChildren: './my-page/my-page.module#MyPageModule', canActivate: [AuthGuard]},
  {path: 'game-detail/:gameId', loadChildren: './game-detail/game-detail.module#GameDetailModule', canActivate: [AuthGuard]},
  {path: 'search', loadChildren: './search-result/search-result.module#SearchResultModule', canActivate: [AuthGuard]},
  {path: 'more-rating', loadChildren: './more-rating/more-rating.module#MoreRatingModule', canActivate: [AuthGuard]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [AuthGuard]
})
export class AppRoutingModule {
}
