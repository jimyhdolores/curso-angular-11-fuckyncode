import { Injectable } from '@angular/core';
import jwt_decode from 'jwt-decode';
import { IJwt } from './../models/auth';
import { LocalStorageJwt } from './../static/local-storage';
@Injectable({
	providedIn: 'root'
})
export class JwtAuthService {
	login(token: string): void {
		const decode = jwt_decode<IJwt>(token);
		localStorage.setItem(LocalStorageJwt.LS_ACCES_TOKEN, token);
		localStorage.setItem(LocalStorageJwt.LS_ROLES, JSON.stringify(decode.role));
	}

	isLoggedIn(): boolean {
		const lsRol = localStorage.getItem(LocalStorageJwt.LS_ROLES);
		if (!lsRol) {
			return false;
		}
		const rolArray = JSON.parse(lsRol) as Array<string>;
		if (rolArray.length == 0) {
			return false;
		}

		return true;
	}

	isAdmin(): boolean {
		const lsRol = localStorage.getItem(LocalStorageJwt.LS_ROLES)!;
		const rolArray = JSON.parse(lsRol) as Array<string>;
		const rolAdmin = rolArray.find((x) => x === 'ADMIN');

		return rolAdmin !== undefined;
	}
}
