import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from '../../shared/guard/canActive/auth.guard';
import { InitDataStep1Component } from './init-data-step-1/init-data-step-1.component';
import { InitDataStep2Component } from './init-data-step-2/init-data-step-2.component';
import { InitDataComponent } from './init-data.component';

const routes: Routes = [
  {path: '', component: InitDataComponent, canActivate: [AuthGuard]},
  {path: '1', component: InitDataStep1Component, canActivate: [AuthGuard]},
  {path: '2', component: InitDataStep2Component, canActivate: [AuthGuard]},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  providers: [AuthGuard]
})
export class InitDataRoutingModule { }
