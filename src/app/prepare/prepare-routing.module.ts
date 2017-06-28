import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from '../shared/guard/auth.guard';
import { InitDataComponent } from './init-data/init-data.component';
import { PrepareComponent } from './prepare.component';

const routes: Routes = [
    { path: '', pathMatch: 'full', redirectTo: '/prepare/log-in' },
    { path: 'log-in', component: PrepareComponent },
    { path: 'sign-up', component: PrepareComponent },
    { path: 'init-data', component: InitDataComponent, canActivate: [ AuthGuard ] },
];

@NgModule({
    imports: [ RouterModule.forChild(routes) ],
    exports: [ RouterModule ],
    providers: [ AuthGuard ]
})
export class PrepareRoutingModule {
}
