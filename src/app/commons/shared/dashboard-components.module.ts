import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MatToolbarModule } from '@angular/material/toolbar';
import { AnimeComponent } from '../components/anime/anime.component';
import { HeaderComponent } from './../components/header/header.component';
import { MenuComponent } from './../components/menu/menu.component';

@NgModule({
	declarations: [HeaderComponent, MenuComponent, AnimeComponent],
	imports: [CommonModule, MatToolbarModule, MatIconModule, MatListModule, MatButtonModule],
	exports: [HeaderComponent, MenuComponent, AnimeComponent]
})
export class DashboardComponentsModule {}
