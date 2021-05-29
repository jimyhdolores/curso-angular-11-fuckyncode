import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NgxChartsModule } from '@swimlane/ngx-charts';

import { LineChartComponent } from './line-chart.component';

const routes: Routes = [
	{
		path: '',
		component: LineChartComponent
	}
];

@NgModule({
	declarations: [LineChartComponent],
	imports: [CommonModule, NgxChartsModule, RouterModule.forChild(routes)],
	exports: [LineChartComponent]
})
export class LineChartModule {}
