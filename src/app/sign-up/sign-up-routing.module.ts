import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SignUpComponent } from './sign-up.component';

const routes: Routes = [
  {path: '', component: SignUpComponent},
  {path: 'init-data', loadChildren: 'app/sign-up/init-data/init-data.module#InitDataModule'},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SignUpRoutingModule { }
