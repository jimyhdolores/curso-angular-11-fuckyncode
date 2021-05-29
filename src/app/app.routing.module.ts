import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BarChartComponent } from './pages/bar-chart/bar-chart.component';

export const routes: Routes = [
	{
		path: 'barchart',
		component: BarChartComponent
	},
	{
		path: 'linechart',
		loadChildren: () =>
			import('./pages/line-chart/line-chart.module').then((m) => m.LineChartModule)
	},
	{
		path: 'piechart',
		loadChildren: () => import('./pages/pie-chart/pie-chart.module').then((m) => m.PieChartModule)
	},
	{
		path: '',
		redirectTo: '/barchart',
		pathMatch: 'prefix'
	},
	{ path: '**', pathMatch: 'full', redirectTo: 'barchart' }
];

@NgModule({
	imports: [RouterModule.forRoot(routes)],
	exports: [RouterModule]
})
export class AppRoutingModule {}
