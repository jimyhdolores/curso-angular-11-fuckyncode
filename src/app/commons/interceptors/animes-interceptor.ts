import {
	HttpErrorResponse,
	HttpEvent,
	HttpHandler,
	HttpInterceptor,
	HttpRequest
} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { MessageService } from '../services/message.service';
import { PathRest } from './../static/path-rest';
@Injectable()
export class AnimeInterceptor implements HttpInterceptor {
	constructor(private messageService: MessageService) {}

	intercept(req: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
		const token = localStorage.getItem('acces_token')!;
		let requestClone = req;

		if (!this.isLogin(req.url)) {
			requestClone = req.clone({
				headers: req.headers.set('Authorization', `Bearer ${token}`)
			});
		}

		return next.handle(requestClone).pipe(catchError((error) => this.herrorHandler(error)));
	}

	private isLogin(url: string): boolean {
		return url.search(PathRest.GET_LOGIN) != -1;
	}

	private herrorHandler(error: HttpErrorResponse): Observable<never> {
		if (error instanceof HttpErrorResponse) {
			if (error.error instanceof ErrorEvent) {
				this.messageService.showError('ERROR DE CLIENTE', 'top right');
			} else {
				if (error.status === 401) {
					this.messageService.showError('Ustede no cuenta con permisos para ingresar', 'top right');
				} else {
					this.messageService.showError('ERROR DE SERVIDOR', 'top right');
				}
			}
		} else {
			this.messageService.showError('OTRO TIPO DE ERROR', 'top right');
		}
		return throwError(error);
	}
}
