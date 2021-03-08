import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatSelectModule } from '@angular/material/select';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { ColorCircleModule } from 'ngx-color/circle';
import { TotalModule } from './../total/total.module';
import { OptionsTvComponent } from './options-tv.component';

@NgModule({
	imports: [CommonModule, ColorCircleModule, MatSlideToggleModule, MatSelectModule, TotalModule],
	exports: [OptionsTvComponent],
	declarations: [OptionsTvComponent],
	providers: []
})
export class OptionTvModule {}
