import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WidgetSavingsGoal } from './widget-savings-goal';

describe('WidgetSavingsGoal', () => {
  let component: WidgetSavingsGoal;
  let fixture: ComponentFixture<WidgetSavingsGoal>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [WidgetSavingsGoal]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WidgetSavingsGoal);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
