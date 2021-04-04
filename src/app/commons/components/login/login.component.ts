import { Component } from '@angular/core';

@Component({
	selector: 'app-login',
	templateUrl: './login.component.html',
	styleUrls: ['../../scss/auth.component.scss']
})
export class LoginComponent {
	userName = 'john';
	password = '123456';

	clickLogin(): void {
		console.log('');
	}
}
