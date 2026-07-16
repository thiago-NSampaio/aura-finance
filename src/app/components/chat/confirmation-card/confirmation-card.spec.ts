import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConfirmationCard } from './confirmation-card';

describe('ConfirmationCard', () => {
  let component: ConfirmationCard;
  let fixture: ComponentFixture<ConfirmationCard>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ConfirmationCard]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ConfirmationCard);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
