import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class AuthGuard implements CanActivate {
    constructor (private router: Router) {
    }

    canActivate (next: ActivatedRouteSnapshot,
                 state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
        if ( sessionStorage.getItem('user_id') ) {
            return true;
        } else {
            this.router.navigate(['/log-in']);
            return false;
        }
    }
}
