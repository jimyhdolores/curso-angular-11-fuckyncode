import { Component } from '@angular/core';
import { JwtHelperService } from '@auth0/angular-jwt';
import { AuthService } from '../services/auth.service';

@Component({
	selector: 'app-login',
	templateUrl: './login.component.html',
	styleUrls: ['./login.component.scss']
})
export class LoginComponent {
	constructor(private authService: AuthService, private jwtHelper: JwtHelperService) {}

	userName = 'john';
	password = '123456';

	clickLogin(): void {
		this.authService.login(this.userName, this.password).subscribe((data) => {
			console.log(data);
			console.log(this.jwtHelper.decodeToken(data.accessToken));
			console.log(this.jwtHelper.getTokenExpirationDate());
		});
	}
}
