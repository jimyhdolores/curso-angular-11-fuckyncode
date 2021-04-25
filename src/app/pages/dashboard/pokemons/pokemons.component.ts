import { Component } from '@angular/core';
import { IAnime } from './../../../commons/models/auth';

@Component({
	selector: 'app-pokemons',
	templateUrl: './pokemons.component.html',
	styleUrls: ['./pokemons.component.scss']
})
export class PokemonsComponent {
	list: IAnime[] = [
		{
			name: 'Charmander',
			description:
				'Prefiere las cosas calientes. Dicen que cuando llueve le sale vapor de la punta de la cola.',
			ulrImg: 'https://i.ibb.co/KbYwmWT/Charmander.png',
			evolutions: [
				{
					name: 'Charmeleon',
					description:
						'Este Pokémon de naturaleza agresiva ataca en combate con su cola llameante y hace trizas al rival con sus afiladas garras.',
					ulrImg: 'https://i.ibb.co/179bNgG/Charmeleon.png'
				},
				{
					name: 'Charizard',
					description:
						'Escupe un fuego tan caliente que funde las rocas. Causa incendios forestales sin querer.',
					ulrImg: 'https://i.ibb.co/gm6TM6G/Charizard.png'
				}
			]
		}
	];
}
