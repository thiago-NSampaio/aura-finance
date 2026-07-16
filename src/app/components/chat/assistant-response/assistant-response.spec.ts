import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AssistantResponse } from './assistant-response';

describe('AssistantResponse', () => {
  let component: AssistantResponse;
  let fixture: ComponentFixture<AssistantResponse>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AssistantResponse]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AssistantResponse);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
