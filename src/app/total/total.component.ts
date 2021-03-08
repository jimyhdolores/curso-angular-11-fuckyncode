import { Component } from '@angular/core';
import { CalculateService } from './../common/service/calculate.service';

@Component({
	selector: 'app-total',
	templateUrl: './total.component.html',
	styleUrls: ['./total.component.scss']
})
export class TotalComponent {
	constructor(public calculateService: CalculateService) {}
}
