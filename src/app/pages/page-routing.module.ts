import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AnimeGuardGuardCanDeactive } from './../commons/guards/anime-guard-candeactive.guard';
import { AnimeGuardGuardChild } from './../commons/guards/anime-guard-child.guard';
import { AnimeGuardGuard } from './../commons/guards/anime-guard.guard';
import { DashboardComponent } from './dashboard/dashboard.component';
import { DigimonsComponent } from './dashboard/digimons/digimons.component';
import { MedabotsComponent } from './dashboard/medabots/medabots.component';
import { PokemonsComponent } from './dashboard/pokemons/pokemons.component';

export const routes: Routes = [
	{
		path: '',
		component: DashboardComponent,
		canActivate: [AnimeGuardGuard],
		canActivateChild: [AnimeGuardGuardChild],
		children: [
			{
				path: 'pokemons',
				component: PokemonsComponent
			},
			{
				path: 'digimons',
				component: DigimonsComponent,
				canDeactivate: [AnimeGuardGuardCanDeactive]
			},
			{
				path: 'medabots',
				component: MedabotsComponent
			},
			{
				path: '',
				redirectTo: 'pokemons',
				pathMatch: 'full'
			}
		]
	}
];

@NgModule({
	imports: [RouterModule.forChild(routes)],
	exports: [RouterModule]
})
export class DashBoardRoutingModule {}
