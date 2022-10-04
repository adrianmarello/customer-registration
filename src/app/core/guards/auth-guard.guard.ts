import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { LocalStorageService } from '../services/local-storage.service';

@Injectable({
    providedIn: 'root'
})
export class AuthGuard implements CanActivate {

    constructor(private router: Router, private localStorage: LocalStorageService) {}

    canActivate(
        route: ActivatedRouteSnapshot,
        state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree 
        {
            // Si existe un access token en el Storage retornamos true 
            // Caso contrario redirigimos a la pagina de login y retornamos false
            if(this.localStorage.get('access_token')) return true;
            this.router.navigate(['/auth/login'])
            return false;
        }
}
