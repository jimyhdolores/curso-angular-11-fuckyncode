import { Component } from '@angular/core';

@Component({
	selector: 'app-menu',
	templateUrl: './menu.component.html',
	styleUrls: ['./menu.component.scss']
})
export class MenuComponent {
	listMenu = [
		{ name: 'User', path: '/dashboard/users', icon: 'account_circle' },
		{ name: 'Albums', path: '/dashboard/albums', icon: 'star_rate' },
		{ name: 'Posts', path: '/dashboard/posts', icon: 'article' }
	];
}
