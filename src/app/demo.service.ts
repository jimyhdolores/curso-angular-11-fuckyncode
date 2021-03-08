import { Injectable } from '@angular/core';

@Injectable()
export class DemoService {
	private msg = 'Intenta cambiar mi valor';

	constructor() {
		console.log('***ESTE ES EL CONSTRUCTOR DEL SERVICIO DEMO**');
	}

	saludo(componet: string) {
		console.log('Hello!! ' + componet);
	}

	setMsg(value: string) {
		this.msg = value;
	}

	getMsg(): string {
		return this.msg;
	}
}
