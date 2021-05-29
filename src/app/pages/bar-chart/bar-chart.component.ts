import { Component, OnInit } from '@angular/core';
import { IBarChart } from 'src/app/models/charts.interface';

import { DATA_BAR_CHAR } from '../../models/data-charts';

@Component({
	selector: 'app-bar-chart',
	templateUrl: './bar-chart.component.html',
	styleUrls: ['./bar-chart.component.scss']
})
export class BarChartComponent implements OnInit {
	data: IBarChart[] = [];

	view: [number, number] = [700, 400];

	// options
	showXAxis = true;
	showYAxis = true;
	gradient = false;
	showLegend = true;
	showXAxisLabel = true;
	xAxisLabel = 'Country';
	showYAxisLabel = true;
	yAxisLabel = 'Population';

	colorScheme = {
		domain: ['#5AA454', '#A10A28', '#C7B42C', '#AAAAAA']
	};

	ngOnInit(): void {
		this.data = DATA_BAR_CHAR;

		setTimeout(() => {
			console.log('******');
			const dataPeru = {
				name: 'Perú',
				value: 2000,
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
