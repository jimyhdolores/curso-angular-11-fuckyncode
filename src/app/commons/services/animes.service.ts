import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IAnime } from '../models/animes';
import { TypeAnime } from './../models/types';
import { PathRest } from './../static/path-rest';

@Injectable()
export class AnimesService {
	constructor(private httpClient: HttpClient) {}

	getAnime(anime: TypeAnime): Observable<IAnime[]> {
		const path = PathRest.GET_ANIME + '/' + anime;
		return this.httpClient.get<IAnime[]>(path);
	}
}
