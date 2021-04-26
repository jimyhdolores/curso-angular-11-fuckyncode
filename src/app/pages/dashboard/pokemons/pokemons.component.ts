import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { AnimesService } from './../../../commons/services/animes.service';

@Component({
	selector: 'app-pokemons',
	templateUrl: './pokemons.component.html',
	styleUrls: ['./pokemons.component.scss']
})
export class PokemonsComponent implements OnInit, OnDestroy {
	constructor(private animesService: AnimesService) {}

	private _subscriptionAnime: Subscription | undefined;

	ngOnDestroy(): void {
		this._subscriptionAnime?.unsubscribe();
	}

	ngOnInit(): void {
		this._subscriptionAnime = this.animesService.getAnime('pokemon').subscribe((data) => {
			console.log(data);
		});
	}
}
