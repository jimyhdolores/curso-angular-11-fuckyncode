import { environment } from './../../../environments/environment';
export class PathRest {
	static readonly GET_LOGIN = environment.hostBackend + '/login';
	static readonly GET_ANIME = environment.hostBackend + '/anime';

	// static readonly GET_LOGIN = '/fuckyncode/login';
}
