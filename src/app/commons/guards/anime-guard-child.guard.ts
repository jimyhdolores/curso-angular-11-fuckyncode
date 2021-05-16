import { Injectable } from '@angular/core';
import {
	ActivatedRouteSnapshot,
	CanActivateChild,
	RouterStateSnapshot,
	UrlTree
} from '@angular/router';
import { Observable } from 'rxjs';
import { JwtAuthService } from '../services/jwt-auth.service';
import { MessageService } from './../services/message.service';

@Injectable({
	providedIn: 'root'
})
export class AnimeGuardGuardChild implements CanActivateChild {
	constructor(private _jwtAuthService: JwtAuthService, private _messageService: MessageService) {}
	canActivateChild(
		childRoute: ActivatedRouteSnapshot,
		state: RouterStateSnapshot
	): boolean | UrlTree | Observable<boolean | UrlTree> | Promise<boolean | UrlTree> {
		const path = childRoute.routeConfig?.path;
		if (path === 'medabots' && !this._jwtAuthService.isAdmin()) {
			this._messageService.showError(
				'No cuenta con permisos suficientes para poder ingresar',
				'top right'
			);
			return false;
		}
		return true;
	}
}
