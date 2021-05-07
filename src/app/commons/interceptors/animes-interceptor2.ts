import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { MessageService } from '../services/message.service';
@Injectable()
export class AnimeInterceptor2 implements HttpInterceptor {
	constructor(private messageService: MessageService) {}

	intercept(req: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
		return next.handle(req);
	}

	// herrorHandler(error: HttpErrorResponse): Observable<never> {
	// 	if (error instanceof HttpErrorResponse) {
	// 		if (error.error instanceof ErrorEvent) {
	// 			console.log('ERROR DE CLIENTE');
	// 			this.messageService.showError('ERROR DE CLIENTE', 'top right');
	// 		} else {
	// 			console.log('ERROR DE SERVIDOR');
	// 			console.log(error.status);
	// 			console.log(error.message);
	// 			if (error.status === 401) {
	// 				this.messageService.showError('Ustede no cuenta con permisos para ingresar', 'top right');
	// 			} else {
	// 				this.messageService.showError('ERROR DE SERVIDOR', 'top right');
	// 			}
	// 		}
	// 	} else {
	// 		console.log('OTRO TIPO DE ERROR');
	// 		this.messageService.showError('OTRO TIPO DE ERROR', 'top right');
	// 	}
	// 	return throwError(error);
	// }
}
