export interface IBarChart {
	name: string;
	value: number;
	extra: IExtra;
}

interface IExtra {
	code: string;
}

export interface ILineChart {
	name: string;
	series: ISeries[];
}

interface ISeries {
	value: number;
	name: string;
}
