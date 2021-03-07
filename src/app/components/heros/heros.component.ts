import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';

@Component({
	selector: 'app-heros',
	templateUrl: './heros.component.html',
	styleUrls: ['./heros.component.scss']
})
export class HerosComponent implements OnInit, AfterViewInit {
	@ViewChild('miH1') miH1: ElementRef | undefined;
	// constructor() {}

	titulo = 'Hello World';
	disableInput = true;
	color = 'blue';
	decimalPrueba = 0.589;
	currencyNumber = 1000;
	myJson = { name: 'fuckynCode', channel: 'yotube' };
	miPromesa = new Promise((resolve) => {
		setTimeout(() => {
			resolve('esto es una promesa');
		}, 3000);
	});

	miDate = new Date();

	/**
	 *  Directivas
	 */

	directivaNgModel = 'Hello';
	miEstiloNgStyle = { color: 'red', 'font-size': '2em', 'font-weight': 'bold' };
	miNgClass = false;
	ngOnInit(): void {
		setTimeout(() => {
			// this.titulo = 'Hello FuckynCode';
			this.miNgClass = true;
			this.disableInput = false;
			this.miEstiloNgStyle = { color: 'blue', 'font-size': '1em', 'font-weight': 'normal' };
		}, 1500);

		// console.log(this.miH1);

		console.log('hola', JSON.stringify(this.myJson));
	}

	ngAfterViewInit(): void {
		console.log(this.miH1);
		// this.miH1?.nativeElement.innerText = 'Hello FuckynCoders';
	}
	getSuma(numero1: number, numero2: number): number {
		return numero1 + numero2;
	}

	showMessage() {
		console.log('Esto es un mensaje');
	}

	keyUp(event: KeyboardEvent) {
		console.log('*************');

		this.titulo = event.key;
	}

	getMaxLength() {
		return 2;
	}

	getChangeColor() {
		return this.titulo === 'Hello World';
		// if (this.titulo === 'Hello World') {
		// 	return true;
		// }
		// return false;
	}
}
