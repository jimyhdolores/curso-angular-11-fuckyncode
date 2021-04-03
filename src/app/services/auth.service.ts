import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';
import { IRLogin } from './../models/auth';
@Injectable({ providedIn: 'root' })
export class AuthService {
	constructor(private httpClient: HttpClient) {}

	login(username: string, password: string): Observable<IRLogin> {
		return this.httpClient
			.post<IRLogin>('http://localhost:3000/fuckyncode/login', { username, password })
			.pipe(
				tap((res: IRLogin) => {
					localStorage.setItem('accessToken', res.accessToken);
				}),
				catchError((error) => {
					return this.errorHandler(error);
				})
			);
	}

	private errorHandler(error: any) {
		if (error instanceof HttpErrorResponse) {
			if (error.error instanceof ErrorEvent) {
				// client-side error
			} else {
				// server-side error
				console.log(`error status : ${error.status} ${error.statusText}`);
			}
		} else {
			console.error('some thing else happened');
		}
		return throwError(error);
	}
}
