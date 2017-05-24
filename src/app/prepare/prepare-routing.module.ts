import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PrepareComponent } from './prepare.component';

const routes: Routes = [
    { path: '', pathMatch: 'full', redirectTo: 'log-in' },
    { path: 'log-in', component: PrepareComponent },
    { path: 'sign-up', component: PrepareComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PrepareRoutingModule { }
