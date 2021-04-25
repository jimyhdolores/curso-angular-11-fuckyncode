export interface IRLogin {
	accessToken: string;
}

export interface IRegister {
	username: string;
	password: string;
	repeatPassword: string;
}

export interface IRQLogin {
	username: string;
	password: string;
}

export interface IAnime {
	name: string;
	description: string;
	ulrImg: string;
	evolutions?: IAnime[];
}
