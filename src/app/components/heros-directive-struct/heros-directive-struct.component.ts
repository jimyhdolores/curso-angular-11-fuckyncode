import {
	AfterViewInit,
	ChangeDetectorRef,
	Component,
	ElementRef,
	OnInit,
	ViewChild
} from '@angular/core';

@Component({
	selector: 'app-heros-directive-struct',
	templateUrl: './heros-directive-struct.component.html',
	styleUrls: ['./heros-directive-struct.component.scss']
})
export class HerosDirectiveStructComponent implements OnInit, AfterViewInit {
	@ViewChild('miBoton') miBoton: ElementRef<HTMLInputElement> | undefined;
	constructor(private detectChange: ChangeDetectorRef) {}

	showButtonSave = false;
	textoInput = '';
	heroeIngresado = '';
	heroeSeleccionado: IHeroe = <IHeroe>{};

	miArrayHeroes: IHeroe[] = [
		{
			id: 1,
			name: 'SuperMan'
		},
		{
			id: 2,
			name: 'BatMan'
		},
		{
			id: 3,
			name: 'SpiderMan'
		}
	];
	ngOnInit(): void {
		console.log(this.miBoton);

		setTimeout(() => {
			this.showButtonSave = true;
			this.detectChange.detectChanges();
			console.log(this.miBoton);
		}, 3000);
	}

	ngAfterViewInit(): void {
		console.log(this.miBoton);
	}

	addHero(): void {
		const objectoMayor = this.miArrayHeroes.reduce((prev, current) =>
			prev.id > current.id ? prev : current
		);

		this.miArrayHeroes.push({ id: objectoMayor.id + 1, name: this.textoInput });
	}

	modifyHero(heroe: IHeroe): void {
		// heroe.name = 'AquaMan';
		this.heroeSeleccionado = heroe;
		console.log(this.heroeSeleccionado);
	}

	modify(): void {
		// this.miArrayHeroes[0].name = 'Black Panter';
		this.refrescarHeroes();
	}

	private refrescarHeroes() {
		this.miArrayHeroes = [
			{
				id: 1,
				name: 'SUPERMAN'
			},
			{
				id: 2,
				name: 'BatMan'
			},
			{
				id: 3,
				name: 'SPIDERMAN'
			}
		];
	}

	trackByHero(hero: IHeroe): number {
		return hero.id;
	}
}

interface IHeroe {
	id: number;
	name: string;
}
