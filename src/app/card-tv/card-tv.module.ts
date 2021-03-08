import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { OptionTvModule } from '../options-tv/option-tv.module';
import { CardTvComponent } from './card-tv.component';
@NgModule({
	imports: [MatCardModule, OptionTvModule, MatButtonModule],
	exports: [CardTvComponent],
	declarations: [CardTvComponent],
	providers: []
})
export class CardTvModule {}
