import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WidgetExpenses } from './widget-expenses';

describe('WidgetExpenses', () => {
  let component: WidgetExpenses;
  let fixture: ComponentFixture<WidgetExpenses>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [WidgetExpenses]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WidgetExpenses);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
