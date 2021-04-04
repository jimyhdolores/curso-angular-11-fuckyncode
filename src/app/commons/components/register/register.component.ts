import { Component } from '@angular/core';
import { IRegister } from './../../models/auth';

@Component({
	selector: 'app-register',
	templateUrl: './register.component.html',
	styleUrls: ['../../scss/auth.component.scss']
})
export class RegisterComponent {
	registerUser: IRegister = <IRegister>{};

	clickRegister(): void {
		console.log('');
	}
}
