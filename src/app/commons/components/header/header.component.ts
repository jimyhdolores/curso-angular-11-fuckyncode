import { Component, EventEmitter, Output } from '@angular/core';

@Component({
	selector: 'app-header',
	templateUrl: './header.component.html',
	styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
	@Output() clickMenu = new EventEmitter(true);

	clickHamburguer(): void {
		this.clickMenu.emit(true);
	}
}
