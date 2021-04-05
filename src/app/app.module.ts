import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { JwtModule } from '@auth0/angular-jwt';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AuthModule } from './pages/auth/auth.module';

@NgModule({
	declarations: [AppComponent],
	imports: [
		BrowserModule,
		BrowserAnimationsModule,
		AuthModule,
		AppRoutingModule,
		HttpClientModule,
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
