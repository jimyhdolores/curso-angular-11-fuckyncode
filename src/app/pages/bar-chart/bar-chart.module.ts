import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { NgxChartsModule } from '@swimlane/ngx-charts';

import { BarChartComponent } from './bar-chart.component';

@NgModule({
	declarations: [BarChartComponent],
	imports: [CommonModule, NgxChartsModule, MatCardModule],
	exports: [BarChartComponent]
})
export class BarChartModule {}
