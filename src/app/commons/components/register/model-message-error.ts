import { AbstractControl, ValidationErrors, ValidatorFn } from '@angular/forms';

export interface IAtribute {
	formControlName: string;
	validators: IValidator[];
}

export interface IValidator {
	name: string;
	message: string;
}

export function customValidator(): ValidatorFn {
	return (control: AbstractControl): ValidationErrors | null => {
		const value = control.value as string;
		if (!value.includes('*')) {
			return { custom1: true };
		}

		if (!value.includes('$')) {
			return { custom2: true };
		}
		return null;
	};
}

export const MODEL_REGISTER_ERRORS: IAtribute[] = [
	{
		formControlName: 'username',
		validators: [
			{
				name: 'required',
				message: 'El usuario es requerido'
			},
			{
				name: 'minlength',
				message: 'La cantidad minima es 5'
			},
			{
				name: 'custom1',
				message: 'El texto debe contener un asterisco "*"'
			},
			{
				name: 'custom2',
				message: 'El texto debe contener un sigo de dolar "$"'
			}
		]
	},
	{
		formControlName: 'password',
		validators: [
			{
				name: 'required',
				message: 'La contraseña es requerida'
			}
		]
	}
];
