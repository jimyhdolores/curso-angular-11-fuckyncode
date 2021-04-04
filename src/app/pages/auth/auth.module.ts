import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { AuthComponentsModule } from './../../commons/shared/auth-components.module';
import { LoginPageComponent } from './login-page/login-page.component';
import { RegisterPageComponent } from './register-page/register-page.component';

@NgModule({
	declarations: [LoginPageComponent, RegisterPageComponent],
	imports: [CommonModule, AuthComponentsModule],
	exports: [LoginPageComponent, RegisterPageComponent]
})
export class AuthModule {}
