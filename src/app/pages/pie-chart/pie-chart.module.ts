import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NgxChartsModule } from '@swimlane/ngx-charts';

import { PieChartComponent } from './pie-chart.component';

const routes: Routes = [
	{
		path: '',
		component: PieChartComponent
	}
];
@NgModule({
	declarations: [PieChartComponent],
	imports: [CommonModule, NgxChartsModule, RouterModule.forChild(routes)],
	exports: [PieChartComponent]
})
export class PieChartModule {}
