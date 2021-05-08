import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';
import { JwtAuthService } from '../../services/jwt-auth.service';
import { IRQLogin } from './../../models/auth';

@Component({
	selector: 'app-login',
	templateUrl: './login.component.html',
	styleUrls: ['../../scss/auth.component.scss']
})
export class LoginComponent {
	constructor(
		private _router: Router,
		private _loginService: AuthService,
		private _jwtAuthService: JwtAuthService
	) {}

	userName = 'john';
	password = '123456';

	clickLogin(): void {
		const user: IRQLogin = { username: this.userName, password: this.password };
		this._loginService.login(user).subscribe((data) => {
			this._jwtAuthService.login(data.accessToken);
			void this._router.navigateByUrl('/dashboard');
		});
	}

	onClickRegister(): void {
		/**
		 * En caso no desees hacer el "ruteo" con codigo entonces usar
		 *  [routerLink]="['/register']"
		 */
		void this._router.navigateByUrl('/register');
	}
}
