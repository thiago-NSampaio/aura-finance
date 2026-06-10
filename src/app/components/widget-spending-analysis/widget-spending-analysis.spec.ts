import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WidgetSpendingAnalysis } from './widget-spending-analysis';

describe('WidgetSpendingAnalysis', () => {
  let component: WidgetSpendingAnalysis;
  let fixture: ComponentFixture<WidgetSpendingAnalysis>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [WidgetSpendingAnalysis]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WidgetSpendingAnalysis);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
