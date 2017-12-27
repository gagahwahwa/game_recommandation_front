import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { InitDataComponent } from './init-data.component';
import { AuthGuard } from '../../shared/guard/canActive/auth.guard';

const routes: Routes = [
  {path: '', component: InitDataComponent, canActivate: [AuthGuard]},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  providers: [AuthGuard]
})
export class InitDataRoutingModule { }
