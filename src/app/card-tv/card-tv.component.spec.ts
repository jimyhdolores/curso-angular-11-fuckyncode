import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardTvComponent } from './card-tv.component';

describe('CardTvComponent', () => {
	let component: CardTvComponent;
	let fixture: ComponentFixture<CardTvComponent>;

	beforeEach(async () => {
		await TestBed.configureTestingModule({
			declarations: [CardTvComponent]
		}).compileComponents();
	});

	beforeEach(() => {
		fixture = TestBed.createComponent(CardTvComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});
});
