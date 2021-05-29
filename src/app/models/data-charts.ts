import { IBarChart, ILineChart } from './charts.interface';

export const DATA_BAR_CHAR: IBarChart[] = [
	{
		name: 'Germany',
		value: 40632,
		extra: {
			code: 'de'
		}
	},
	{
		name: 'United States',
		value: 50000,
		extra: {
			code: 'us'
		}
	},
	{
		name: 'France',
		value: 36745,
		extra: {
			code: 'fr'
		}
	},
	{
		name: 'United Kingdom',
		value: 36240,
		extra: {
			code: 'uk'
		}
	},
	{
		name: 'Spain',
		value: 33000,
		extra: {
			code: 'es'
		}
	},
	{
		name: 'Italy',
		value: 35800,
		extra: {
			code: 'it'
		}
	}
];

export const DATA_LINE_CHART: ILineChart[] = [
	{
		name: 'Uruguay',
		series: [
			{
				value: 3815,
				name: '2016-09-21T11:48:07.763Z'
			},
			{
				value: 2906,
				name: '2016-09-13T02:31:21.281Z'
			},
			{
				value: 3988,
				name: '2016-09-20T02:57:44.263Z'
			},
			{
				value: 6887,
				name: '2016-09-20T13:37:15.257Z'
			},
			{
				value: 3441,
				name: '2016-09-17T17:25:21.831Z'
			}
		]
	},
	{
		name: 'Bermuda',
		series: [
			{
				value: 3666,
				name: '2016-09-21T11:48:07.763Z'
			},
			{
				value: 6539,
				name: '2016-09-13T02:31:21.281Z'
			},
			{
				value: 3703,
				name: '2016-09-20T02:57:44.263Z'
			},
			{
				value: 4522,
				name: '2016-09-20T13:37:15.257Z'
			},
			{
				value: 4635,
				name: '2016-09-17T17:25:21.831Z'
			}
		]
	},
	{
		name: 'Ghana',
		series: [
			{
				value: 3326,
				name: '2016-09-21T11:48:07.763Z'
			},
			{
				value: 4458,
				name: '2016-09-13T02:31:21.281Z'
			},
			{
				value: 3454,
				name: '2016-09-20T02:57:44.263Z'
			},
			{
				value: 3345,
				name: '2016-09-20T13:37:15.257Z'
			},
			{
				value: 3579,
				name: '2016-09-17T17:25:21.831Z'
			}
		]
	},
	{
		name: 'Italy',
		series: [
			{
				value: 6750,
				name: '2016-09-21T11:48:07.763Z'
			},
			{
				value: 3037,
				name: '2016-09-13T02:31:21.281Z'
			},
			{
				value: 3470,
				name: '2016-09-20T02:57:44.263Z'
			},
			{
				value: 6097,
				name: '2016-09-20T13:37:15.257Z'
			},
			{
				value: 4427,
				name: '2016-09-17T17:25:21.831Z'
			}
		]
	},
	{
		name: 'Puerto Rico',
		series: [
			{
				value: 5292,
				name: '2016-09-21T11:48:07.763Z'
			},
			{
				value: 5127,
				name: '2016-09-13T02:31:21.281Z'
			},
			{
				value: 4080,
				name: '2016-09-20T02:57:44.263Z'
			},
			{
				value: 4465,
				name: '2016-09-20T13:37:15.257Z'
			},
			{
				value: 3897,
				name: '2016-09-17T17:25:21.831Z'
			}
		]
	}
];
