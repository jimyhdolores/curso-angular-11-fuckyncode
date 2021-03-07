import { Component } from '@angular/core';

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.scss']
})
export class AppComponent {
	title = 'curso-angular11';
	show = true;

	constructor() {
		console.log('**APP-COMPONENT**-> CONSTRUCTOR');
	}
}
