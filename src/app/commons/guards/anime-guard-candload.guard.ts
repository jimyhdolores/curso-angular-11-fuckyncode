import { Injectable } from '@angular/core';
import { CanLoad, Route, UrlSegment, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
	providedIn: 'root'
})
export class AnimeGuardGuardCanLoad implements CanLoad {
	canLoad(
		route: Route,
		segments: UrlSegment[]
	): boolean | UrlTree | Observable<boolean | UrlTree> | Promise<boolean | UrlTree> {
		console.log('*********CanLoad********');
		return true;
	}
}
