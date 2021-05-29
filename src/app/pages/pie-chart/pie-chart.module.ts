import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PieChartComponent } from './pie-chart.component';
import { Routes, RouterModule } from '@angular/router';
const routes: Routes = [
	{
		path: '',
		component: PieChartComponent
	}
];
@NgModule({
	declarations: [PieChartComponent],
	imports: [CommonModule, RouterModule.forChild(routes)],
	exports: [PieChartComponent]
})
export class PieChartModule {}
