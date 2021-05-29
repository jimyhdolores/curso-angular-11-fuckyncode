import { Component, OnInit } from '@angular/core';
import { DATA_LINE_CHART } from 'src/app/models/data-charts';

import { ILineChart } from './../../models/charts.interface';

@Component({
	selector: 'app-line-chart',
	templateUrl: './line-chart.component.html',
	styleUrls: ['./line-chart.component.scss']
})
export class LineChartComponent implements OnInit {
	data: ILineChart[] = [];

	view: [number, number] = [700, 300];

	// options
	legend = true;
	showLabels = true;
	animations = true;
	xAxis = true;
	yAxis = true;
	showYAxisLabel = true;
	showXAxisLabel = true;
	xAxisLabel = 'Year';
	yAxisLabel = 'Population';
	timeline = true;

	colorScheme = {
		domain: ['#5AA454', '#E44D25', '#CFC0BB', '#7aa3e5', '#a8385d', '#aae3f5']
	};

	ngOnInit(): void {
		this.data = DATA_LINE_CHART;
	}
	onSelect(event: Event): void {
		console.log(event);
	}
}
