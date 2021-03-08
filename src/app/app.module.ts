import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { MatBadgeModule } from '@angular/material/badge';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppComponent } from './app.component';
import { CardTvModule } from './card-tv/card-tv.module';
@NgModule({
	schemas: [CUSTOM_ELEMENTS_SCHEMA],
	declarations: [AppComponent],
	imports: [
		BrowserModule,
		BrowserAnimationsModule,
		CardTvModule,
		MatButtonModule,
		MatIconModule,
		MatBadgeModule
	],
	providers: [],
	bootstrap: [AppComponent]
})
export class AppModule {}
