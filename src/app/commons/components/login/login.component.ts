import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';
import { IRQLogin } from './../../models/auth';

@Component({
	selector: 'app-login',
	templateUrl: './login.component.html',
	styleUrls: ['../../scss/auth.component.scss']
})
export class LoginComponent {
	constructor(private router: Router, private loginService: AuthService) {}

	userName = 'john';
	password = '123456';

	clickLogin(): void {
		const user: IRQLogin = { username: this.userName, password: this.password };
		// this.loginService.login(user).subscribe((data) => {
		// 	void this.router.navigateByUrl('/dashboard');
		// });
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
