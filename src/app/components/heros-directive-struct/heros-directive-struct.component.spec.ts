import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HerosDirectiveStructComponent } from './heros-directive-struct.component';

describe('HerosDirectiveStructComponent', () => {
	let component: HerosDirectiveStructComponent;
	let fixture: ComponentFixture<HerosDirectiveStructComponent>;

	beforeEach(async () => {
		await TestBed.configureTestingModule({
			declarations: [HerosDirectiveStructComponent]
		}).compileComponents();
	});

	beforeEach(() => {
		fixture = TestBed.createComponent(HerosDirectiveStructComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});
});
