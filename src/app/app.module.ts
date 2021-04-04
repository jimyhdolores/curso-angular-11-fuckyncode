import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { JwtModule } from '@auth0/angular-jwt';
import { AppComponent } from './app.component';
import { AuthComponentsModule } from './commons/shared/auth-components.module';

@NgModule({
	declarations: [AppComponent],
	imports: [
		BrowserModule,
		BrowserAnimationsModule,
		HttpClientModule,
		AuthComponentsModule,
		JwtModule.forRoot({
			config: {
				tokenGetter: function getItem() {
					return localStorage.getItem('accessToken');
				}
			}
		})
	],
	providers: [],
	bootstrap: [AppComponent]
})
export class AppModule {}
