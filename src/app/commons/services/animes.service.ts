import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { TypeAnime } from './../models/types';
import { PathRest } from './../static/path-rest';

@Injectable()
export class AnimesService {
	constructor(private httpClient: HttpClient) {}

	getAnime(anime: TypeAnime) {
		const path = PathRest.GET_ANIME + '/' + anime;
		return this.httpClient.get(path);
	}
}
