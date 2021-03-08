import { Component } from '@angular/core';
import { ColorEvent } from 'ngx-color';
import { ITv } from './../common/models/tv.interface';
import { ColorsTv, ResolutionsTV, SizesTV } from './../common/models/tv.type';
import { CalculateService } from './../common/service/calculate.service';
@Component({
	selector: 'app-options-tv',
	templateUrl: './options-tv.component.html',
	styleUrls: ['./options-tv.component.scss'],
	providers: [CalculateService]
})
export class OptionsTvComponent {
	colors: ColorsTv[] = ['#f44336', '#e91e63', '#9c27b0'];
	sizes: SizesTV[] = ['10 pulgadas', '19 pulgadas', '24 pulgadas', '32 pulgadas', '40 pulgadas'];
	resolutions: ResolutionsTV[] = ['4K ULTRA HD', 'HD', 'FULL HD', '8K'];
	optionsTv: ITv = <ITv>{};

	constructor(private calculateService: CalculateService) {}
	// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
	handleChangeComplete($event: ColorEvent) {
		// const color = ($event as unknown) as ColorEvent;
		console.log($event.color);
		// console.log($event.color);
	}
	changeTamanio(): void {
		this.sendOptionTv();
	}

	changeResolution(): void {
		this.sendOptionTv();
	}
	private sendOptionTv() {
		this.calculateService.setOptionsTv(this.optionsTv);
	}
}
