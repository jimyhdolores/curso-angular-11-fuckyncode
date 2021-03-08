import { Component, OnInit } from '@angular/core';
import { BadgeService } from './common/service/badge.service';

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
	title = 'curso-angular11';
	show = true;
	countTv = 0;
	constructor(private badgeService: BadgeService) {}

	ngOnInit(): void {
		this.badgeService.chanelBadge.subscribe((value) => {
			if (value) {
				this.countTv++;
			}
		});
	}
}
