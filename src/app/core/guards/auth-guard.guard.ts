import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { ConfigurationService } from '../services/configuration.service';
import { LocalStorageService } from '../services/local-storage.service';

@Injectable({
    providedIn: 'root'
})
export class AuthGuard implements CanActivate {

    constructor(private router: Router, private configService: ConfigurationService, private localStorage: LocalStorageService) {}

    canActivate(
        route: ActivatedRouteSnapshot,
        state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree 
        {
            if(this.configService.access_token) return true;
            if(this.localStorage.get('access_token')) return true;
            this.router.navigate(['/auth/login'])
            return false;
        }
}
