import { Injectable } from '@angular/core';
import {
	ActivatedRouteSnapshot,
	CanActivateChild,
	RouterStateSnapshot,
	UrlTree
} from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
	providedIn: 'root'
})
export class AnimeGuardGuardChild implements CanActivateChild {
	canActivateChild(
		childRoute: ActivatedRouteSnapshot,
		state: RouterStateSnapshot
	): boolean | UrlTree | Observable<boolean | UrlTree> | Promise<boolean | UrlTree> {
		console.log('*********CanActivateChild********');
		return true;
	}
}
