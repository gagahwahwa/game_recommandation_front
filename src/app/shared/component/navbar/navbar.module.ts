import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './navbar.component';
import { RouterModule } from "@angular/router";
import { SearchBarModule } from '../search-bar/search-bar.module';

@NgModule({
    imports: [
        CommonModule,
        RouterModule
    ],
    declarations: [ NavbarComponent ],
    exports: [ NavbarComponent ]
})
export class NavbarModule {
}
