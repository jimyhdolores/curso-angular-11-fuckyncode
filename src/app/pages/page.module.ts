import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatSidenavModule } from '@angular/material/sidenav';
import { AnimesService } from './../commons/services/animes.service';
import { DashboardComponentsModule } from './../commons/shared/dashboard-components.module';
import { DashboardComponent } from './dashboard/dashboard.component';
import { DigimonsComponent } from './dashboard/digimons/digimons.component';
import { MedabotsComponent } from './dashboard/medabots/medabots.component';
import { PokemonsComponent } from './dashboard/pokemons/pokemons.component';
import { DashBoardRoutingModule } from './page-routing.module';
@NgModule({
	declarations: [DashboardComponent, PokemonsComponent, DigimonsComponent, MedabotsComponent],
	imports: [CommonModule, MatSidenavModule, DashboardComponentsModule, DashBoardRoutingModule],
	providers: [AnimesService]
})
export class PageModule {}
