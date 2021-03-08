import { Component } from '@angular/core';
import { ColorEvent } from 'ngx-color';
@Component({
	selector: 'app-options-tv',
	templateUrl: './options-tv.component.html',
	styleUrls: ['./options-tv.component.scss']
})
export class OptionsTvComponent {
	colors = ['#f44336', '#e91e63', '#9c27b0'];
	sizes = ['10 pulgadas ', '19 pulgadas', '24 pulgadas', '32 pulgadas', '40 pulgadas'];
	resolutions = ['4K ULTRA HD', 'HD', 'FULL HD', '8K'];
	// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
	handleChangeComplete($event: ColorEvent) {
		// const color = ($event as unknown) as ColorEvent;
		console.log($event.color);
		// console.log($event.color);
	}
}
