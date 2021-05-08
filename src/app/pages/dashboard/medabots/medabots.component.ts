import { Component } from '@angular/core';
import { IDeactiveComponent } from './../../../commons/models/animes';

@Component({
	selector: 'app-medabots',
	templateUrl: './medabots.component.html',
	styleUrls: ['./medabots.component.scss']
})
export class MedabotsComponent implements IDeactiveComponent {
	canExit(): boolean {
		if (confirm('¿Estas seguro que deseas de medabots salir?')) {
			return true;
		} else {
			return false;
		}
	}
}
