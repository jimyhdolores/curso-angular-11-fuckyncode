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

export interface IJwt {
	exp: number;
	role: string[];
	username: string;
}
