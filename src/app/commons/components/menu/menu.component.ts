import { Component } from '@angular/core';

@Component({
	selector: 'app-menu',
	templateUrl: './menu.component.html',
	styleUrls: ['./menu.component.scss']
})
export class MenuComponent {
	listMenu = [
		{ name: 'Pokemons', path: '/dashboard/pokemons', icon: 'account_circle' },
		{ name: 'Medabots', path: '/dashboard/medabots', icon: 'star_rate' },
		{ name: 'Digimons', path: '/dashboard/digimons', icon: 'article' }
	];
}
