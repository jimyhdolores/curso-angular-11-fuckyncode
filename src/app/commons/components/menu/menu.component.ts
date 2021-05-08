import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
	selector: 'app-menu',
	templateUrl: './menu.component.html',
	styleUrls: ['./menu.component.scss']
})
export class MenuComponent {
	constructor(private _router: Router) {}
	listMenu = [
		{ name: 'Pokemons', path: '/dashboard/pokemons', icon: 'account_circle' },
		{ name: 'Medabots', path: '/dashboard/medabots', icon: 'star_rate' },
		{ name: 'Digimons', path: '/dashboard/digimons', icon: 'article' }
	];

	logout(): void {
		void this._router.navigateByUrl('login');
	}
}
