import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { DigimonsComponent } from './dashboard/digimons/digimons.component';
import { MedabotsComponent } from './dashboard/medabots/medabots.component';
import { PokemonsComponent } from './dashboard/pokemons/pokemons.component';

export const routes: Routes = [
	{
		path: '',
		component: DashboardComponent,
		children: [
			{
				path: 'pokemons',
				component: PokemonsComponent
			},
			{
				path: 'digimons',
				component: DigimonsComponent
			},
			{
				path: 'medabots',
				component: MedabotsComponent
			}
		]
	}
];

@NgModule({
	imports: [RouterModule.forChild(routes)],
	exports: [RouterModule]
})
export class DashBoardRoutingModule {}
