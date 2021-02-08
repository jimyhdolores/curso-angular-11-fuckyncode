import { Component, ViewChild } from '@angular/core';
import { MyComponent2Component } from './components/my-component2/my-component2.component';

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.scss']
})
export class AppComponent {
	title = 'curso-angular11';
	show = true;
	@ViewChild(MyComponent2Component) viewChild: MyComponent2Component | undefined;

	constructor() {
		console.log('**APP-COMPONENT**-> CONSTRUCTOR');
	}
	// ngAfterViewInit(): void {
	// console.log('**APP-COMPONENT**-> ngAfterViewInit');
	// console.log(this.viewChild);
	// }

	// ngDoCheck(): void {
	// console.log('**APP-COMPONENT**-> ngDoCheck');
	// console.log(this.viewChild);
	// }

	// ngOnInit(): void {
	// console.log('**APP-COMPONENT**-> ngOnInit');
	// console.log(this.viewChild);
	// }

	// getMessage(value: string): void {
	// console.log(value);
	// }

	// clickChangeTitle(): void {
	// this.title = 'CAMBIANDO *******';
	// this.show = false;
	// }
}
