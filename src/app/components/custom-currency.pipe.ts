import { formatCurrency, getLocaleCurrencySymbol } from '@angular/common';
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
	name: 'customCurrency'
})
export class CustomCurrencyPipe implements PipeTransform {
	currencyCode = 'PEN';
	locale = 'es-PE';

	transform(value: number, digistInfo: string): string | null {
		const localeCurrencySymbol = getLocaleCurrencySymbol(this.locale) || '';
		return formatCurrency(value, this.locale, localeCurrencySymbol, this.currencyCode, digistInfo);
	}
}
