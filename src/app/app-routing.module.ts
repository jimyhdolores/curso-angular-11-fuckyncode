import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AnimeGuardGuardCanLoad } from './commons/guards/anime-guard-candload.guard';
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
		path: 'dashboard',
		loadChildren: () => import('./pages/page.module').then((m) => m.PageModule),
		canLoad: [AnimeGuardGuardCanLoad]
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
