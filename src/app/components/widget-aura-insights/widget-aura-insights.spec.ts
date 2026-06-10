import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WidgetAuraInsights } from './widget-aura-insights';

describe('WidgetAuraInsights', () => {
  let component: WidgetAuraInsights;
  let fixture: ComponentFixture<WidgetAuraInsights>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [WidgetAuraInsights]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WidgetAuraInsights);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
