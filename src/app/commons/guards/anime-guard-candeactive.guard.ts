import { Injectable } from '@angular/core';
import {
	ActivatedRouteSnapshot,
	CanDeactivate,
	RouterStateSnapshot,
	UrlTree
} from '@angular/router';
import { Observable } from 'rxjs';
import { MedabotsComponent } from 'src/app/pages/dashboard/medabots/medabots.component';
import { IDeactiveComponent } from './../models/animes';

@Injectable({
	providedIn: 'root'
})
export class AnimeGuardGuardCanDeactive implements CanDeactivate<MedabotsComponent> {
	canDeactivate(
		component: IDeactiveComponent,
		currentRoute: ActivatedRouteSnapshot,
		currentState: RouterStateSnapshot,
		nextState?: RouterStateSnapshot
	): boolean | UrlTree | Observable<boolean | UrlTree> | Promise<boolean | UrlTree> {
		return component.canExit();
	}
}
