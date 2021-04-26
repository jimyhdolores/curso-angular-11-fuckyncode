import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AnimeInterceptor } from './commons/interceptors/animes-interceptor';
import { AuthModule } from './pages/auth/auth.module';

@NgModule({
	declarations: [AppComponent],
	imports: [
		BrowserModule,
		BrowserAnimationsModule,
		AuthModule,
		AppRoutingModule,
		HttpClientModule,
		MatSnackBarModule
	],
	providers: [
		{
			provide: HTTP_INTERCEPTORS,
			useClass: AnimeInterceptor,
			multi: true
		}
		// {
		// 	provide: HTTP_INTERCEPTORS,
		// 	useClass: AnimeInterceptor2,
		// 	multi: true
		// }
	],
	bootstrap: [AppComponent]
})
export class AppModule {}
