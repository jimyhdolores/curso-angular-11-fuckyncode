import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
	selector: 'app-login',
	templateUrl: './login.component.html',
	styleUrls: ['../../scss/auth.component.scss']
})
export class LoginComponent {
	constructor(private router: Router) {}

	userName = 'john';
	password = '123456';

	clickLogin(): void {
		void this.router.navigateByUrl('/dashboard');
	}

	onClickRegister(): void {
		/**
		 * En caso no desees hacer el "ruteo" con codigo entonces usar
		 *  [routerLink]="['/register']"
		 */
		void this.router.navigateByUrl('/register');
	}
}
