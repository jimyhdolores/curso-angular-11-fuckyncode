import { Component, OnInit } from '@angular/core';
import { IBarChart } from 'src/app/models/charts.interface';

import { DATA_BAR_CHAR } from '../../models/data-charts';

@Component({
	selector: 'app-pie-chart',
	templateUrl: './pie-chart.component.html',
	styleUrls: ['./pie-chart.component.scss']
})
export class PieChartComponent implements OnInit {
	data: IBarChart[] = [];
	view: [number, number] = [700, 400];
	// options
	gradient = true;
	showLegend = true;
	showLabels = true;
	isDoughnut = false;
	legendPosition = 'below';

	colorScheme = {
		domain: ['#5AA454', '#A10A28', '#C7B42C', '#AAAAAA']
	};

	ngOnInit(): void {
		this.data = DATA_BAR_CHAR;
		setTimeout(() => {
			console.log('******');
			const dataPeru = {
				name: 'Perú',
				value: 20000,
				extra: {
					code: 'pe'
				}
			};
			this.data = [...this.data, dataPeru];
		}, 1500);
	}

	onSelect(event: Event): void {
		console.log(event);
	}
}
