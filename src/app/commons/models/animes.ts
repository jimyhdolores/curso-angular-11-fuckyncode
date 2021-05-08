import { Observable } from 'rxjs';

export interface IAnime {
	name: string;
	description: string;
	ulrImg: string;
	evolutions: IEvolution[];
}

export interface IEvolution {
	name: string;
	description: string;
	ulrImg: string;
}

export interface IDeactiveComponent {
	canExit: () => Observable<boolean> | Promise<boolean> | boolean;
}
