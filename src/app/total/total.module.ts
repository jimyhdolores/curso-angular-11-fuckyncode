import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { TotalComponent } from './total.component';

@NgModule({
	declarations: [TotalComponent],
	imports: [CommonModule],
	exports: [TotalComponent],
	providers: []
})
export class TotalModule {}
