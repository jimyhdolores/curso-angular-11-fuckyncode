import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComponent3Component } from './my-component3.component';

describe('MyComponent3Component', () => {
	let component: MyComponent3Component;
	let fixture: ComponentFixture<MyComponent3Component>;

	beforeEach(async () => {
		await TestBed.configureTestingModule({
			declarations: [MyComponent3Component]
		}).compileComponents();
	});

	beforeEach(() => {
		fixture = TestBed.createComponent(MyComponent3Component);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});
});
