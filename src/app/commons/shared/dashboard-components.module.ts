import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatDialogModule } from '@angular/material/dialog';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MatToolbarModule } from '@angular/material/toolbar';
import { RouterModule } from '@angular/router';
import { AnimeComponent } from '../components/anime/anime.component';
import { ModalAnimeComponent } from '../components/modal-anime/modal-anime.component';
import { HeaderComponent } from './../components/header/header.component';
import { MenuComponent } from './../components/menu/menu.component';
@NgModule({
	declarations: [HeaderComponent, MenuComponent, AnimeComponent, ModalAnimeComponent],
	imports: [
		CommonModule,
		RouterModule,
		MatToolbarModule,
		MatIconModule,
		MatListModule,
		MatButtonModule,
		MatCardModule,
		MatDialogModule
	],
	exports: [HeaderComponent, MenuComponent, AnimeComponent, ModalAnimeComponent]
})
export class DashboardComponentsModule {}
