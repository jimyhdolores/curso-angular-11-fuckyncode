import { Component } from '@angular/core';
import { BadgeService } from './../common/service/badge.service';

@Component({
	selector: 'app-card-tv',
	templateUrl: './card-tv.component.html',
	styleUrls: ['./card-tv.component.scss']
})
export class CardTvComponent {
	constructor(private badgeService: BadgeService) {}

	saveTv(): void {
		this.badgeService.addTv();
	}
}
