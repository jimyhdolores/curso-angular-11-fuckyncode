import { Injectable } from '@angular/core';
import {
	ActivatedRouteSnapshot,
	CanActivate,
	Router,
	RouterStateSnapshot,
	UrlTree
} from '@angular/router';
import { Observable } from 'rxjs';
import { JwtAuthService } from '../services/jwt-auth.service';

@Injectable({
	providedIn: 'root'
})
export class AnimeGuardGuard implements CanActivate {
	constructor(private _jwtAuthService: JwtAuthService, private _router: Router) {}
	canActivate(
		route: ActivatedRouteSnapshot,
		state: RouterStateSnapshot
	): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
		console.log('**CanActivate*');
		const isLoggedIn = this._jwtAuthService.isLoggedIn();
		if (!isLoggedIn) {
			void this._router.navigateByUrl('/login');
		}
		return isLoggedIn;
	}
}
