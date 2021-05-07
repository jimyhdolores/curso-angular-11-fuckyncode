import { Component, Input } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { IAnime } from '../../models/animes';
import { ModalAnimeComponent } from '../modal-anime/modal-anime.component';

@Component({
	selector: 'app-anime',
	templateUrl: './anime.component.html',
	styleUrls: ['./anime.component.scss']
})
export class AnimeComponent {
	@Input() anime = <IAnime>{};

	constructor(public dialog: MatDialog) {}

	clickEvolutions(): void {
		this.dialog.open(ModalAnimeComponent, {
			data: this.anime.evolutions
		});
	}
}
