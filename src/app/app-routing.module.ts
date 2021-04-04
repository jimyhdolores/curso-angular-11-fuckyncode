import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginPageComponent } from './pages/auth/login-page/login-page.component';
import { RegisterPageComponent } from './pages/auth/register-page/register-page.component';

export const routes: Routes = [
	{
		path: 'login',
		component: LoginPageComponent
	},
	{
		path: 'register',
		component: RegisterPageComponent
	},
	{
		path: 'dashboard', // /dashboard -> ''
		loadChildren: () => import('./pages/page.module').then((m) => m.PageModule)
	},
	{
		path: '',
		redirectTo: '/login',
		pathMatch: 'prefix'
	}
];

@NgModule({
	imports: [RouterModule.forRoot(routes)],
	exports: [RouterModule]
})
export class AppRoutingModule {}
