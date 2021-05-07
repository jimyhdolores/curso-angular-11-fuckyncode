import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { IAnime } from '../../models/animes';

@Component({
	selector: 'app-modal-anime',
	templateUrl: './modal-anime.component.html',
	styleUrls: ['./modal-anime.component.scss']
})
export class ModalAnimeComponent {
	constructor(@Inject(MAT_DIALOG_DATA) public listPokemons: IAnime[]) {}
}
