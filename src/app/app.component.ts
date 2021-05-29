import { Component } from '@angular/core';

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.scss']
})
export class AppComponent {
	title = 'curso-angular11';
	listMenu = [
		{ name: 'Bar Chart', path: '/barchart' },
		{ name: 'Pie Chart', path: '/piechart' },
		{ name: 'Line Chart', path: '/linechart' }
	];
}
